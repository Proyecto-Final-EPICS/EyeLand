import React from 'react'

function AdminNavbarButton({ background, img, onClick = null }) {
    return (
        <button className={"w-12 h-12 rounded-lg shadow-lg flex justify-center items-center hover:shadow-none " + background} onClick={onClick}>
            <img src={img} className='w-7 h-7' />
        </button>
    )
}

export default AdminNavbarButton