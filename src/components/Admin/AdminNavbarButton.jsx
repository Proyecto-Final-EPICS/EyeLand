import React from 'react'

function AdminNavbarButton({ title, background, img, onClick = null }) {
    return (
        <button className={"w-12 h-12 rounded-lg shadow-lg flex items-center hover:shadow-none relative group grop " + background} onClick={onClick}>
            <img src={img} className='w-7 h-7 mx-auto' />
            <div className='absolute ml-[70px] rounded-md px-5 py-2 bg-gray-800 flex items-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all shadow-lg'>
                <div className='bg-gray-800 absolute -left-1 w-2 h-2 rounded-sm rotate-45'>
                </div>
                <p className='text-white text-sm font-bold'>{title}</p>
            </div>
        </button>
    )
}

export default AdminNavbarButton