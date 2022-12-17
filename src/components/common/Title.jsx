import React from 'react'

function Title({ textColor, title }) {

    const lineColor = "border-" + textColor.split('-')[1]

    return (
        <div className='title'>
            <hr className={'w-20 border-black ' + lineColor} />
            <h2 className={textColor}>
                {title}
            </h2>
            <hr className={'w-20 border-black ' + lineColor} />
        </div>
    )
}

export default Title