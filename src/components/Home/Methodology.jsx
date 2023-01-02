import { useState, useEffect } from 'react'
import Title from '../common/Title'
import Task from './Task'
import Description from './Description'

function Methodology() {

    const [count, setCount] = useState(0)

    const [classPretask, setClassPretask] = useState('md:-top-32')
    const [classPretaskP, setClassPretaskP] = useState('md:top-10 md:-right-24')
    const [classPretaskD, setClassPretaskD] = useState('md:top-20 md:-translate-x-44 md:opacity-0')

    const [classActivity, setClassActivity] = useState('md:-right-24')
    const [classActivityP, setClassActivityP] = useState('md:top-24 md:-right-24')
    const [classActivityD, setClassActivityD] = useState('md:top-20 md:-translate-x-44 md:opacity-0')

    const [classPosTask, setClassPosTask] = useState('md:-bottom-32')
    const [classPosTaskP, setClassPosTaskP] = useState('md:top-44 md:-right-24')
    const [classPosTaskD, setClassPosTaskD] = useState('md:top-20 md:-translate-x-44 md:opacity-0')

    useEffect(() => {
        switch (count) {
            case 0:
                setClassActivity('md:-right-24')
                setClassActivityP('md:top-24 md:-right-24')
                setClassActivityD('md:top-20 md:-translate-x-44 md:opacity-0')
                setClassPosTask('md:-bottom-32')
                setClassPosTaskP('md:top-44 md:-right-24')
                setClassPosTaskD('md:top-20 md:-translate-x-44 md:opacity-0')

                break
            case 1:
                setClassPretask('md:-top-32')
                setClassPretaskP('md:top-10 md:-right-24')
                setClassPretaskD('md:top-20 md:-translate-x-44 md:opacity-0')
                setClassPosTask('md:-bottom-32')
                setClassPosTaskP('md:top-44 md:-right-24')
                setClassPosTaskD('md:top-20 md:-translate-x-44 md:opacity-0')
                break
            case 2:
                setClassPretask('md:-top-32')
                setClassPretaskP('md:top-10 md:-right-24')
                setClassPretaskD('md:top-20 md:-translate-x-44 md:opacity-0')
                setClassActivity('md:-right-24')
                setClassActivityP('md:top-24 md:-right-24')
                setClassActivityD('md:top-20 md:-translate-x-44 md:opacity-0')
                break
            default:
                break
        }

    }, [count])

    return (
        <div className='flex flex-col items-center justify-center w-screen h-auto px-5 md:mb-48'>
            <Title textColor='text-black' title='Nuestra metodología' />
            <Description>
                Dividimos nuestra aplicación en lo que llamamos  TASK. Cada una de estas a su vez poseé tres partes que corresponden a PresTask, Activity y PosTask
            </Description>


            <div className='w-full md:flex md:w-screen md:justify-start md:max-w-[1366px]'>
                <div className='relative md:w-[600px] md:h-[600px] md:bg-primary md:rounded-full md:mt-52 flex flex-col mt-10 gap-10 items-end md:gap-0 md:items-center md:justify-center md:-left-28 md:flex-row'>
                    <div className='absolute w-[2000px] h-[2000px] bg-terciary rounded-full -z-10 -left-[1650px]  md:-left-[1600px] -top-[700px]' />
                    <div className='absolute w-[1900px] h-[1900px] bg-white rounded-full -z-10 -left-[1600px] md:-left-[1550px] -top-[650px]' />

                    <h1 className='md:text-8xl md:font-bold md:text-white hidden md:block'>TASK</h1>
                    <Task
                        title='Pretask'
                        description='Una serie de link y videos se te daran para que aprendas los conceptos a usar durante la TASK.'
                        img={'PreTaskPhone.svg'}
                        classTask={classPretask}
                        classTaskP={classPretaskP}
                        classTaskD={classPretaskD}
                        setClassTask={setClassPretask}
                        setClassTaskP={setClassPretaskP}
                        setClassTaskD={setClassPretaskD}
                        count={count}
                        setCount={setCount}
                        index={0}
                    />

                    <Task
                        title='Activity'
                        description='Un conjunto de preguntas con feedback que te ayudaran a entender los conceptos aprendidos en la Pretask.'
                        img={'ActivityPhone.svg'}
                        classTask={classActivity}
                        classTaskP={classActivityP}
                        classTaskD={classActivityD}
                        setClassTask={setClassActivity}
                        setClassTaskP={setClassActivityP}
                        setClassTaskD={setClassActivityD}
                        count={count}
                        setCount={setCount}
                        index={1}
                    />

                    <Task
                        title='PosTask'
                        description='Una serie de link y videos se te daran para que aprendas los conceptos a usar durante la TASK.'
                        img={'PosTaskPhone.svg'}
                        classTask={classPosTask}
                        classTaskP={classPosTaskP}
                        classTaskD={classPosTaskD}
                        setClassTask={setClassPosTask}
                        setClassTaskP={setClassPosTaskP}
                        setClassTaskD={setClassPosTaskD}
                        count={count}
                        setCount={setCount}
                        index={2}
                    />
                </div>
            </div>
        </div>
    )
}

export default Methodology