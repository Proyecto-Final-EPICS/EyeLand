import React from 'react'
import NavbarCourses from '../../components/Teacher/NavbarCourses'
import { useLocation } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import { useEffect } from 'react';
import Lottie from "lottie-react";
import Inactive from '../../assets/inactive.json';
import Active from '../../assets/active.json';
import GroupCard from '../../components/Teacher/GroupCard';

function TeacherCourses() {
    const location = useLocation();
    const id = location.pathname.split("/")[3];
    const { error, loading, getCourse } = useCourses();

    useEffect(() => {
        if (id) getCourse(id);
    }, [id]);


    const handleOnClick = () => {
        console.log('Hola')
    }

    //MOCK DATA
    const data = {
        name: 'Curso de prueba',
        session: true
    }

    const started = true;
    const totalQuestions = 10;

    const groups = [
        {
            name: 'Grupo 1',
            correctQuestions: 3,
            students: [
                {
                    name: 'Estudiante 1',
                    id: 1,
                    role: 'Super hearing'
                },
                {
                    name: 'Estudiante 2',
                    id: 2,
                    role: 'Memory pro'
                },
                {
                    name: 'Estudiante 3',
                    id: 3,
                    role: 'Super radar'
                },
            ]
        },
        {
            name: 'Grupo 2',
            correctQuestions: 7,
            students: [
                {
                    name: 'Estudiante 4',
                    id: 4,
                    role: 'Super hearing'
                },
            ]
        },
    ]


    return (
        <div className="flex h-full w-full">
            <NavbarCourses />
            {
                loading ? <p>Loading...</p> :
                    error ? <p>Error</p> : data ? <div className='m-5 w-full'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex gap-5 items-center'>
                                <div className='w-32 h-32'>
                                    <Lottie
                                        animationData={data.session ? Active : Inactive}
                                    />
                                </div>
                                <div>
                                    <h2>{data.name}</h2>
                                    <p className='text-xl'>
                                        El curso actualmente se encuentra <span className='font-bold'>{data.session ? 'Activo' : 'Inactivo'}</span>
                                    </p>
                                </div>
                            </div>
                            <button className={started ? "bg-red-600 rounded-lg shadow-lg text-white px-8 py-4 font-bold text-2xl mr-10" : data.session ? "bg-primary rounded-lg shadow-lg text-white px-8 py-4 font-bold text-2xl mr-10" : "bg-terciary rounded-lg shadow-lg text-white px-8 py-4 font-bold text-2xl mr-10"} onClick={handleOnClick}>
                                {started ? "¡Terminar!" : data.session ? '¡Empezar!' : '¡Activar!'}
                            </button>
                        </div>
                        <div className='flex gap-5'>
                            {
                                (data.session && groups.length !== 0 && !started)
                                    ? groups.map((group, index) => {
                                        return (
                                            <GroupCard group={group} key={index} />
                                        )
                                    })
                                    : (data.session && groups.length === 0 && !started) ? <p>No hay grupos</p> : null

                            }
                            {
                                started && <div className='flex flex-col gap-10 mt-20 mx-5 w-full'>
                                    {
                                        groups.map((group, index) => {
                                            const percentage = (group.correctQuestions / totalQuestions) * 100;
                                            return (
                                                <div key={index} className='flex items-center gap-10 w-full'>
                                                    <div className={'h-10 bg-blue-600 relative flex items-center '} style={{ width: `${percentage}%` }}>
                                                        <div className='h-16 w-16 rounded-full bg-slate-200 absolute -right-8'>
                                                            {/* <img src="" alt="" /> */}
                                                        </div>
                                                    </div>
                                                    <p className='font-bold text-xl'>{group.name}</p>
                                                </div>
                                            )
                                        })

                                    }
                                </div>
                            }
                        </div>
                    </div> : <p>Not found</p>
            }
        </div>
    )
}

export default TeacherCourses