import React from 'react'
import Title from '../../components/common/Title'
import { Link } from 'react-router-dom'

function NavBarCrud() {
    return (
        <div className=' navbarCrud'>
            <Title textColor='text-white' title='Tablas' />
            <div>
                <div className='tables'>
                    <Link className='table' to={'Instituciones'}>Instituciones</Link>
                    <Link className='table' to={'Profesores'}>Profesores</Link>
                    <Link className='table' to={'Cursos'}>Cursos</Link>
                    <Link className='table' to={'Estudiantes'}>Estudiantes</Link>
                    <Link className='table' to={'Grupos'}>Grupos</Link>
                    <Link className='table' to={'Tasks'}>Tasks</Link>
                    <Link className='table' to={'Link-PreTask'}>Link-PreTask</Link>
                    <Link className='table' to={'Preguntas'}>Preguntas</Link>
                    <Link className='table' to={'Opciones'}>Opciones</Link>
                    <Link className='table' to={'Historial'}>Historial</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBarCrud