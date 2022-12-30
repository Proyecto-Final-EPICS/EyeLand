import { useState, useEffect } from 'react'
import Power from './Power'
import Title from '../common/Title'
import Description from './Description'

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
        <div className='flex flex-col items-center justify-center w-screen h-auto bg-secondary px-5 pb-10 mt-20'>
            <Title textColor='text-black' title='Trabajo en equipo' />
            <Description >
                Cada sesión se realiza en grupos de 1 - 3 personas en las que cada persona se le asignará un rol con una habilidad útil para la realización de la TASK.
            </Description>
            {/* <div className='flex justify-center gap-40 mt-16 pb-60'>
                <Power
                    title='Super hearing'
                    img={'Power1.svg'}
                    description='Tu poder es el de poder escuchar como se pronuncian las palabras que aparecen en las preguntas.'
                    setClassPowerD={setClassPower1D}
                    setCounter={setCounter}
                    classPowerD={classPower1D}
                    index={0}
                />
                <Power
                    title='Memory pro'
                    img={'Power2.svg'}
                    description='Tu poder es el de poder ver la traducción de la palabra clave en la pregunta.'
                    setClassPowerD={setClassPower2D}
                    setCounter={setCounter}
                    classPowerD={classPower2D}
                    index={1}
                />
                <Power
                    title='Super radar'
                    img={'Power3.svg'}
                    description='Tu poder es el de poder reconocer ubicar y escuchar las palabras que aparecen en las preguntas.'
                    setClassPowerD={setClassPower3D}
                    setCounter={setCounter}
                    classPowerD={classPower3D}
                    index={2}
                />
            </div> */}
        </div>
    )
}

export default TeamWork