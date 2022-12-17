import { useState, useEffect } from 'react'
import Title from '../common/Title'

function Methodology() {

    const [count, setCount] = useState(0)

    const [classPretask, setClassPretask] = useState('absolute -top-32 flex transition-all duration-500 ease-in-out')
    const [classPretaskP, setClassPretaskP] = useState('absolute font-bold text-xl top-10 -right-24')
    const [classPretaskD, setClassPretaskD] = useState('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')

    const [classActivity, setClassActivity] = useState('absolute -right-32 flex transition-all duration-500 ease-in-out')
    const [classActivityP, setClassActivityP] = useState('absolute font-bold text-xl top-40 -right-24')
    const [classActivityD, setClassActivityD] = useState('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')

    const [classPosTask, setClassPosTask] = useState('absolute -bottom-32 flex transition-all duration-500 ease-in-out')
    const [classPosTaskP, setClassPosTaskP] = useState('absolute font-bold text-xl top-10 -right-24')
    const [classPosTaskD, setClassPosTaskD] = useState('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')

    useEffect(() => {
        switch (count) {
            case 0:
                setClassActivity('absolute -right-32 flex transition-all duration-500 ease-in-out')
                setClassActivityP('absolute font-bold text-xl top-40 -right-24')
                setClassActivityD('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')
                setClassPosTask('absolute -bottom-32 flex transition-all duration-500 ease-in-out')
                setClassPosTaskP('absolute font-bold text-xl top-10 -right-24')
                setClassPosTaskD('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')

                break
            case 1:
                setClassPretask('absolute -top-32 flex transition-all duration-500 ease-in-out')
                setClassPretaskP('absolute font-bold text-xl top-10 -right-24')
                setClassPretaskD('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')
                setClassPosTask('absolute -bottom-32 flex transition-all duration-500 ease-in-out')
                setClassPosTaskP('absolute font-bold text-xl top-10 -right-24')
                setClassPosTaskD('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')
                break
            case 2:
                setClassPretask('absolute -top-32 flex transition-all duration-500 ease-in-out')
                setClassPretaskP('absolute font-bold text-xl top-10 -right-24')
                setClassPretaskD('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')
                setClassActivity('absolute -right-32 flex transition-all duration-500 ease-in-out')
                setClassActivityP('absolute font-bold text-xl top-40 -right-24')
                setClassActivityD('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-44 text-end opacity-0')
                break
            default:
                break
        }

    }, [count])

    return (
        <div className='methodology'>
            <Title textColor='text-black' title=' Nuestra metodología' />
            <p>
                Dividimos nuestra aplicación en lo que llamamos  TASK. Cada una de estas a su vez poseé tres partes que corresponden a PresTask, Activity y PosTask
            </p>
            <div>
                <div className='relative w-[816px] h-[816px] bg-primary rounded-full mt-72 flex items-center justify-center -left-2/3 '>
                    <h1 className='text-9xl font-bold text-white'>TASK</h1>
                    <div
                        className={classPretask}

                    >
                        <img src="PreTaskPhone.svg" alt="" />
                        <p className={classPretaskP}>Pretask</p>
                        <p className={classPretaskD}>
                            Una serie de link y videos se te daran para que aprendas los conceptos a usar durante la TASK.
                        </p>
                        <div
                            className=' h-80 absolute top-5 w-screen opacity-0' onMouseEnter={() => {
                                setClassPretask('absolute -top-32 flex transition-all duration-500 ease-in-out transform translate-x-[1100px]')
                                setClassPretaskP('absolute font-bold text-xl top-10 transform -translate-x-24')
                                setClassPretaskD('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-48 text-end opcity-100')
                                setCount(0)
                            }}>
                        </div>
                    </div>
                    <div
                        className={classActivity}
                    >
                        <img src="ActivityPhone.svg" alt="" />
                        <p className={classActivityP}>Activity</p>
                        <p className={classActivityD}>
                            Un conjunto de preguntas con feedback que te ayudaran a entender los conceptos aprendidos en la Pretask.
                        </p>
                        <div
                            className=' h-80 absolute top-5 w-screen opacity-0'
                            onMouseEnter={() => {
                                setClassActivity('absolute -right-32 flex transition-all duration-500 ease-in-out transform translate-x-[650px]')
                                setClassActivityP('absolute font-bold text-xl top-40 transform -translate-x-24 -translate-y-24')
                                setClassActivityD('absolute flex transition-all duration-500 ease-in-out top-28 trasform -translate-x-48 text-end opcity-100')
                                setCount(1)
                            }}
                        >

                        </div>

                    </div>
                    <div
                        className={classPosTask}
                    >
                        <img src="PosTaskPhone.svg" alt="" />
                        <p className={classPosTaskP}>PosTask</p>
                        <p className={classPosTaskD}>
                            Un conjunto de preguntas sin feedfack que nos ayudaran a saber que tan bien aprendiste los conceptos.
                        </p>
                        <div
                            className=' h-80 absolute top-5 w-screen opacity-0'
                            onMouseEnter={() => {
                                setClassPosTask('absolute -bottom-32 flex transition-all duration-500 ease-in-out transform translate-x-[1100px]')
                                setClassPosTaskP('absolute font-bold text-xl top-10 transform -translate-x-24')
                                setClassPosTaskD('absolute flex transition-all duration-500 ease-in-out top-20 trasform -translate-x-48 text-end opcity-100')
                                setCount(2)
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Methodology