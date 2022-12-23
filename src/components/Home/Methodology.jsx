import { useState, useEffect } from 'react'
import Title from '../common/Title'
import Task from './Task'

function Methodology() {

    const [count, setCount] = useState(0)

    const [classPretask, setClassPretask] = useState('-top-32')
    const [classPretaskP, setClassPretaskP] = useState('top-10 -right-24')
    const [classPretaskD, setClassPretaskD] = useState('top-20 -translate-x-44 opacity-0')

    const [classActivity, setClassActivity] = useState('-right-24')
    const [classActivityP, setClassActivityP] = useState('top-24 -right-24')
    const [classActivityD, setClassActivityD] = useState('top-20 -translate-x-44 opacity-0')

    const [classPosTask, setClassPosTask] = useState('-bottom-32')
    const [classPosTaskP, setClassPosTaskP] = useState('top-44 -right-24')
    const [classPosTaskD, setClassPosTaskD] = useState('top-20 -translate-x-44 opacity-0')

    useEffect(() => {
        switch (count) {
            case 0:
                setClassActivity('-right-24')
                setClassActivityP('top-24 -right-24')
                setClassActivityD('top-20 -translate-x-44 opacity-0')
                setClassPosTask('-bottom-32')
                setClassPosTaskP('top-44 -right-24')
                setClassPosTaskD('top-20 -translate-x-44 opacity-0')

                break
            case 1:
                setClassPretask('-top-32')
                setClassPretaskP('top-10 -right-24')
                setClassPretaskD('top-20 -translate-x-44 opacity-0')
                setClassPosTask('-bottom-32')
                setClassPosTaskP('top-44 -right-24')
                setClassPosTaskD('top-20 -translate-x-44 opacity-0')
                break
            case 2:
                setClassPretask('-top-32')
                setClassPretaskP('top-10 -right-24')
                setClassPretaskD('top-20 -translate-x-44 opacity-0')
                setClassActivity('-right-24')
                setClassActivityP('top-24 -right-24')
                setClassActivityD('top-20 -translate-x-44 opacity-0')
                break
            default:
                break
        }

    }, [count])

    return (
        <div className='flex flex-col items-center justify-center w-screen h-auto'>
            <Title textColor='text-black' title='Nuestra metodología' />
            <p className='text-2xl text-center font-light w-[1000px] leading-relaxed'>
                Dividimos nuestra aplicación en lo que llamamos  TASK. Cada una de estas a su vez poseé tres partes que corresponden a PresTask, Activity y PosTask
            </p>
            <div className='flex w-screen justify-start max-w-[1366px]'>
                {/* Bola verder */}
                <div className='tasks relative w-[600px] h-[600px] bg-primary rounded-full mt-52 flex items-center justify-center -left-28'>
                    {/* Arco verde */}
                    <div className='absolute w-[2000px] h-[2000px] bg-terciary rounded-full -z-10 -left-[1600px] -top-[700px]'></div>
                    <div className='absolute w-[1900px] h-[1900px] bg-white rounded-full -z-10 -left-[1550px] -top-[650px]'></div>

                    <h1 className='text-8xl font-bold text-white'>TASK</h1>
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