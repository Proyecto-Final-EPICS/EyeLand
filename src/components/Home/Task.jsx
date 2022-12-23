import React from 'react'

function Task({ title, description, img, index, classTask, setClassTask, classTaskP, setClassTaskP, classTaskD, setClassTaskD, setCount }) {
    return (
        <div
            className={'absolute flex transition-all duration-500 ease-in-out ' + classTask}
        >
            <img src={img} className='w-32' />
            <h5 className={'absolute font-bold text-xl ' + classTaskP}>{title}</h5>
            <p className={'absolute flex transition-all duration-500 ease-in-out text-end ' + classTaskD}>
                {description}
            </p>
            <div
                className='h-56 absolute top-5 w-screen opacity-0'
                onMouseEnter={() => {
                    setClassTask(classTask + ' translate-x-[1000px]')
                    setClassTaskP('top-8 -translate-x-24')
                    setClassTaskD('top-16 -translate-x-36 opcity-100')
                    setCount(index)
                }}
            >
            </div>
        </div>
    )
}

export default Task