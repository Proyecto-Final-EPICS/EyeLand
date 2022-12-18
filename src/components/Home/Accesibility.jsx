import { useState } from 'react'
import Title from '../common/Title'

function Accesibility() {

    const [classAccesibility, setClassAccesibility] = useState('bg-white text-black flex flex-col items-center justify-center pb-10')
    const [classAccesibilityP, setClassAccesibilityP] = useState('text-2xl font-Poppins font-light w-96 leading-relaxed relative -top-10 tracking-normal')

    return (
        <div className={classAccesibility}>
            <Title title="Para todos" textColor={
                classAccesibility.includes('text-black') ? 'text-black' : 'text-white'
            } />
            <div className='flex justify-center gap-20 w-[1300px] mt-10 items-center'>
                <p className={classAccesibilityP} id='descripción'>
                    Es muy importante que todas las personas puedan disfrutar de nuestra aplicación, independientemente de sus habilidades o limitaciones físicas. Por eso, hemos implementado varias opciones de accesibilidad para que todos puedan usarla de manera cómoda y sin problemas.
                </p>
                <div className='relative flex'>
                    <img src="AccesibilityBanner.svg" alt="" className='w-[500px]' />
                    <div className='absolute w-28 h-28 rounded-full bg-secondary -top-16 right-36 shadow-lg flex items-center justify-center group hover:cursor-default'>
                        <img src="Mouse.svg" alt="" className='absolute w-16 h-16 group-hover:opacity-0 transition-all' />
                        <p className='absolute text-white text-center opacity-0 group-hover:opacity-100 transition-all font-bold px-5'>
                            Pruebalo tu mismo
                        </p>
                    </div>
                    {/* Leer página */}
                    <div
                        className="absolute w-32 h-32 top-10 left-5 cursor-pointer"
                        onClick={
                            () => {
                                // activate the function to read the page integrated in the browser
                                window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('descripción').textContent))

                            }
                        }
                    ></div>
                    {/* Contraste */}
                    <div
                        className="absolute w-32 h-32 top-10 left-40 cursor-pointer"
                        onClick={
                            () => {
                                if (classAccesibility.includes('bg-white')) {
                                    setClassAccesibility('bg-black text-white flex flex-col items-center justify-center pb-10 tracking-normal')
                                } else {
                                    setClassAccesibility('bg-white text-black flex flex-col items-center justify-center pb-10 tracking-normal')
                                }
                            }
                        }
                    ></div>
                    {/* Aumentar tamaño */}
                    <div
                        className="absolute w-32 h-32 top-44 left-5 cursor-pointer"
                        onClick={
                            () => {
                                if (classAccesibilityP.includes('text-2xl')) {
                                    setClassAccesibilityP('text-3xl font-light w-96 leading-relaxed relative -top-10 tracking-normal')
                                } else if (classAccesibilityP.includes('text-3xl')) {
                                    setClassAccesibilityP('text-4xl font-light w-96 leading-relaxed relative -top-10 tracking-normal')
                                } else if (classAccesibilityP.includes('text-4xl')) {
                                    setClassAccesibilityP('text-2xl font-light w-96 leading-relaxed relative -top-10 tracking-normal')
                                }
                            }
                        }

                    ></div>
                    {/* Cambiar fuente */}
                    <div
                        className="absolute w-32 h-32 top-44 left-40 cursor-pointer"
                        onClick={
                            () => {
                                if (classAccesibilityP.includes('font-Poppins')) {
                                    setClassAccesibilityP('text-2xl font-sans font-light w-96 leading-relaxed relative -top-10 tracking-normal')
                                } else if (classAccesibilityP.includes('font-sans')) {
                                    setClassAccesibilityP('text-2xl font-serif font-light w-96 leading-relaxed relative -top-10 tracking-normal')
                                } else if (classAccesibilityP.includes('font-serif')) {
                                    setClassAccesibilityP('text-2xl font-mono font-light w-96 leading-relaxed relative -top-10 tracking-normal')
                                } else if (classAccesibilityP.includes('font-mono')) {
                                    setClassAccesibilityP('text-2xl font-Poppins font-light w-96 leading-relaxed relative -top-10 tracking-normal')
                                }
                            }
                        }
                    ></div>
                    {/* Cambiar espaciado */}
                    <div
                        className="absolute w-32 h-32 top-80 left-5 cursor-pointer"
                        onClick={
                            () => {
                                if (classAccesibilityP.includes('tracking-normal')) {
                                    setClassAccesibilityP('text-2xl font-light w-96 leading-relaxed relative -top-10 tracking-widest')
                                } else if (classAccesibilityP.includes('tracking-widest')) {
                                    setClassAccesibilityP('text-2xl font-light w-96 leading-relaxed relative -top-10 tracking-normal')
                                }
                            }
                        }
                    ></div>
                </div>
            </div>
        </div >
    )
}

export default Accesibility