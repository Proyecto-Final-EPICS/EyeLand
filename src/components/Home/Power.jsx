import React from 'react'

function Power({ title, description, img, index, setClassPowerD, setCounter, classPowerD }) {
    return (
        <div
            className="bg-cuaternary p-5 shadow-lg rounded-lg hover:cursor-pointer relative"
            onMouseEnter={() => {
                setClassPowerD(classPowerD.replace('opacity-0', 'opacity-100'))
                setCounter(index)
            }}
        >
            <img src={img} alt="" className='w-16 h-16' />

            <div className={'absolute text-center w-96 mt-10 -translate-x-[41%] transition-all duration-500 ease-in-out ' + classPowerD}>
                <h3 className='text-2xl font-bold mb-2'>{title}</h3>
                <p className='text-base font-light'>{description}</p>
            </div>

        </div>
    )
}

export default Power