import React from 'react'

function Hero() {
    return (
        <div className='flex items-center justify-center w-screen h-auto gap-20 px-20'>
            <div className='flex flex-col items-start w-[550px]'>
                <h1 className='text-9xl font-bold bg-gradient-to-r from-primary to to-secondary bg-clip-text text-transparent animate-entrance-1'>
                    EYELAND
                </h1>
                <h2 className='text-2xl opacity-70 font-medium animate-entrance-2'>
                    App para la enseñanza del inglés y el trabajo en equipo
                </h2>
                <div className='button bg-terciary text-white text-4xl mt-10 cursor-default animate-entrance'>
                    ¡Muy Pronto!
                </div>
            </div>
            <div>
                <img src="./EyeLandHero.svg" alt="" />
            </div>
        </div>
    )
}

export default Hero