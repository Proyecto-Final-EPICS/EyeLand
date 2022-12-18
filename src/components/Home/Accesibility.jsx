import { useState } from 'react'
import Title from '../common/Title'

function Accesibility() {

    const [classAccesibility, setClassAccesibility] = useState('accesibility bg-white text-black')
    const [classAccesibilityP, setClassAccesibilityP] = useState('leading-relaxed text-2xl font-Poppins tracking-normal')

    return (
        <div className={classAccesibility}>
            <Title title="Para todos" textColor={
                classAccesibility.includes('text-black') ? 'text-black' : 'text-white'
            } />
            <div>
                <p className={classAccesibilityP} id='descripción'>
                    Es muy importante que todas las personas puedan disfrutar de nuestra aplicación, independientemente de sus habilidades o limitaciones físicas. Por eso, hemos implementado varias opciones de accesibilidad para que todos puedan usarla de manera cómoda y sin problemas.
                </p>
                <div>
                    <img src="AccesibilityBanner.svg" alt="" />
                    <div className='clickable group '>
                        <img src="Mouse.svg" alt="" className='group-hover:opacity-0' />
                        <p className='group-hover:opacity-100'>
                            Pruebalo tu mismo
                        </p>
                    </div>
                    <div className='accesibilityButtons'>

                        {/* Leer página */}
                        <div
                            className="top-10 left-5"
                            onClick={
                                () => {
                                    // activate the function to read the page integrated in the browser
                                    window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('descripción').textContent))

                                }
                            }
                        ></div>

                        {/* Contraste */}
                        <div
                            className="top-10 left-40"
                            onClick={
                                () => {
                                    if (classAccesibility.includes('bg-white')) {
                                        setClassAccesibility('accesibility bg-black text-white')
                                    } else {
                                        setClassAccesibility('accesibility bg-white text-black')
                                    }
                                }
                            }
                        ></div>

                        {/* Aumentar tamaño */}
                        <div
                            className="top-44 left-5"
                            onClick={
                                () => {
                                    if (classAccesibilityP.includes('text-2xl')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('text-2xl', 'text-3xl'))
                                    } else if (classAccesibilityP.includes('text-3xl')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('text-3xl', 'text-4xl'))
                                    } else if (classAccesibilityP.includes('text-4xl')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('text-4xl', 'text-2xl'))
                                    }
                                }
                            }
                        ></div>

                        {/* Cambiar fuente */}
                        <div
                            className="top-44 left-40"
                            onClick={
                                () => {
                                    if (classAccesibilityP.includes('font-Poppins')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('font-Poppins', 'font-sans'))
                                    } else if (classAccesibilityP.includes('font-sans')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('font-sans', 'font-serif'))
                                    } else if (classAccesibilityP.includes('font-serif')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('font-serif', 'font-mono'))
                                    } else if (classAccesibilityP.includes('font-mono')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('font-mono', 'font-Poppins'))
                                    }
                                }
                            }
                        ></div>

                        {/* Cambiar espaciado */}
                        <div
                            className="top-80 left-5"
                            onClick={
                                () => {
                                    if (classAccesibilityP.includes('tracking-normal')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('tracking-normal', 'tracking-widest'))
                                    } else if (classAccesibilityP.includes('tracking-widest')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('tracking-widest', 'tracking-normal'))
                                    }
                                }
                            }
                        ></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Accesibility