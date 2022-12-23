import React from 'react'

function Title({ textColor, title }) {

    const lineClass = "w-20 border-" + textColor.split('-')[1]

    return (
        <div className='title flex items-center gap-5 justify-center py-8'>
            <hr className={lineClass} />
            <h2 className={textColor}>
                {title}
            </h2>
            <hr className={lineClass} />
        </div>
    )
}

export default Title