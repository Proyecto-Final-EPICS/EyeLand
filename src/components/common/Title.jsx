import React from 'react'

function Title({ textColor, title }) {

    const lineClass = "w-10 xl:w-20 border-" + textColor.split('-')[1]

    return (
        <div className='flex items-center gap-5 justify-center pt-10 pb-3'>
            <hr className={lineClass} />
            <h2 className={textColor}>
                {title}
            </h2>
            <hr className={lineClass} />
        </div>
    )
}

export default Title