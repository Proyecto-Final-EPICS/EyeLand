import React from 'react'

function AccesibilityButton({ className, onClick }) {
    return (
        <div
            className={'absolute w-[26%] h-[22%] cursor-pointer  ' + className}
            onClick={onClick}
        ></div>
    )
}

export default AccesibilityButton