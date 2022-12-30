import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col-reverse items-center justify-center w-screen h-auto gap-3 px-20 xl:flex-row xl:gap-20'>
            <div className='flex flex-col items-start xl:w-[550px]'>
                <h1 className='text-7xl xl:text-9xl font-bold bg-gradient-to-r from-primary to to-secondary bg-clip-text text-transparent animate-entrance-1'>
                    EYELAND
                </h1>
                <h2 className='text-xl xl:text-2xl opacity-70 font-medium animate-entrance-2'>
                    App para la enseñanza del inglés y el trabajo en equipo
                </h2>
                <div className='bg-terciary text-white text-xl xl:text-4xl mt-5 cursor-default animate-entrance button'>
                    ¡Muy Pronto!
                </div>
            </div>
            <div className='w-[400px] xl:w-auto'>
                <img src="./EyeLandHero.svg" alt="" className='w-[400px] relative -right-10 xl:block xl:w-auto' />
            </div>
        </div>
    )
}

export default Hero