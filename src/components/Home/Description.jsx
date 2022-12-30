import React from 'react'

function Description({ children }) {
    return (
        <p className='text text-start font-light leading-relaxed md:text-2xl md:text-center xl:w-[1000px]'>
            {children}
        </p>
    )
}

export default Description