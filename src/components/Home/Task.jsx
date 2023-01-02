import React from 'react'

function Task({ title, description, img, index, classTask, setClassTask, classTaskP, setClassTaskP, classTaskD, setClassTaskD, setCount }) {
    return (
        <div
            className={'relative md:absolute flex transition-all duration-500 ease-in-out ' + classTask}
        >
            <img src={img} className='w-28 md:w-32' />
            <h5 className={'absolute max-md:right-32 top-10 text-base font-bold md:text-xl ' + classTaskP}>{title}</h5>
            <p className={'absolute right-32 w-48 text-sm top-16 md:right-auto md:w-auto md:text-base flex transition-all duration-500 ease-in-out text-end ' + classTaskD}>
                {description}
            </p>
            <div
                className='h-56 absolute top-5 w-screen opacity-0'
                onMouseEnter={() => {
                    if (index !== 1) {
                        setClassTask(classTask + ' md:translate-x-[500px] xl:translate-x-[900px]')
                    } else {
                        setClassTask(classTask + ' md:translate-x-[170px] xl:translate-x-[600px]')
                    }
                    setClassTaskP('md:top-8 md:-translate-x-24')
                    setClassTaskD('md:top-16 md:-translate-x-36 md:opcity-100')
                    setCount(index)
                }}
            >
            </div>
        </div>
    )
}

export default Task