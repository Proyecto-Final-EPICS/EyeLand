import { useState, useEffect } from 'react'
import Title from '../common/Title'

function TeamWork() {

    const [counter, setCounter] = useState(0)

    const [classPower1D, setClassPower1D] = useState('opacity-100')
    const [classPower2D, setClassPower2D] = useState('opacity-0')
    const [classPower3D, setClassPower3D] = useState('opacity-0')

    useEffect(() => {
        switch (counter) {
            case 0:
                setClassPower2D(classPower2D.replace('opacity-100', 'opacity-0'))
                setClassPower3D(classPower3D.replace('opacity-100', 'opacity-0'))
                break;
            case 1:
                setClassPower1D(classPower1D.replace('opacity-100', 'opacity-0'))
                setClassPower3D(classPower3D.replace('opacity-100', 'opacity-0'))
                break;
            case 2:
                setClassPower1D(classPower1D.replace('opacity-100', 'opacity-0'))
                setClassPower2D(classPower2D.replace('opacity-100', 'opacity-0'))
                break;
            default:
                break;
        }
    }, [counter])

    return (
        <div className='teamwork'>
            <Title textColor='text-black' title='Trabajo en equipo' />
            <p>
                Cada sesión se realiza en grupos de 1 - 3 personas en las que cada persona se le asignará un rol con una habilidad útil para la realización de la TASK.
            </p>
            <div className='powers'>
                <div
                    className="power"
                    onMouseEnter={() => {
                        setClassPower1D(classPower1D.replace('opacity-0', 'opacity-100'))
                        setCounter(0)
                    }}
                >
                    <img src="Power1.svg" alt="" />

                    <div className={classPower1D}>
                        <h3>Super hearing</h3>
                        <p>Tu poder es el de poder escuchar como se pronuncian las palabras que aparecen en las preguntas.</p>
                    </div>

                </div>
                <div
                    className="power"
                    onMouseEnter={() => {
                        setClassPower2D(classPower2D.replace('opacity-0', 'opacity-100'))
                        setCounter(1)
                    }}
                >
                    <img src="Power2.svg" alt="" />
                    <div className={classPower2D}>
                        <h3>Memory pro</h3>
                        <p>Tu poder es el de poder ver la traducción de la palabra clave en la pregunta.</p>
                    </div>

                </div>
                <div
                    className="power"
                    onMouseEnter={() => {
                        setClassPower3D(classPower3D.replace('opacity-0', 'opacity-100'))
                        setCounter(2)
                    }}
                >
                    <img src="Power3.svg" alt="" />
                    <div className={classPower3D}>
                        <h3>Super radar</h3>
                        <p>Tu poder es el de poder reconocer ubicar y volver a leer las instrucciones.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeamWork