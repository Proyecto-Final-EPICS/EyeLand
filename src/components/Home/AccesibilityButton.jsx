import React from 'react'

function AccesibilityButton({ className, onClick }) {
    return (
        <div
            className={'absolute w-32 h-32 cursor-pointer ' + className}
            onClick={onClick}
        ></div>
    )
}

export default AccesibilityButton