import { useState, useEffect } from 'react'
import Title from '../common/Title'

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
        <div className='methodology'>
            <Title textColor='text-black' title=' Nuestra metodología' />
            <p>
                Dividimos nuestra aplicación en lo que llamamos  TASK. Cada una de estas a su vez poseé tres partes que corresponden a PresTask, Activity y PosTask
            </p>
            <div className='banner'>
                <div className='tasks'>
                    <div className='absolute w-[2000px] h-[2000px] bg-terciary rounded-full -z-10 -left-[1600px] -top-[700px]'></div>
                    <div className='absolute w-[1900px] h-[1900px] bg-white rounded-full -z-10 -left-[1550px] -top-[650px]'></div>
                    <h1>TASK</h1>
                    <div
                        className={classPretask}
                    >
                        <img src="PreTaskPhone.svg" />
                        <h5 className={classPretaskP}>Pretask</h5>
                        <p className={classPretaskD}>
                            Una serie de link y videos se te daran para que aprendas los conceptos a usar durante la TASK.
                        </p>
                        <div
                            onMouseEnter={() => {
                                setClassPretask(classPretask + ' translate-x-[1000px]')
                                setClassPretaskP('top-8 -translate-x-24')
                                setClassPretaskD('top-16 -translate-x-36 opcity-100')
                                setCount(0)
                            }}>
                        </div>
                    </div>
                    <div
                        className={classActivity}
                    >
                        <img src="ActivityPhone.svg" />
                        <h5 className={classActivityP}>Activity</h5>
                        <p className={classActivityD}>
                            Un conjunto de preguntas con feedback que te ayudaran a entender los conceptos aprendidos en la Pretask.
                        </p>
                        <div
                            onMouseEnter={() => {
                                setClassActivity(classActivity + ' translate-x-[650px]')
                                setClassActivityP('top-4 -translate-x-24')
                                setClassActivityD('top-12 -translate-x-36 opcity-100')
                                setCount(1)
                            }}
                        >
                        </div>

                    </div>
                    <div
                        className={classPosTask}
                    >
                        <img src="PosTaskPhone.svg" />
                        <h5 className={classPosTaskP}>PosTask</h5>
                        <p className={classPosTaskD}>
                            Un conjunto de preguntas sin feedfack que nos ayudaran a saber que tan bien aprendiste los conceptos.
                        </p>
                        <div
                            onMouseEnter={() => {
                                setClassPosTask(classPosTask + ' translate-x-[1000px]')
                                setClassPosTaskP('top-8 -translate-x-24')
                                setClassPosTaskD(' top-16 -translate-x-36 opcity-100')
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