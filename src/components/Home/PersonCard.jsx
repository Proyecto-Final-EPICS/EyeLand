import React from 'react'

function PersonCard({ name, img, link }) {
    return (
        <a href={link} className='card flex items-center justify-between flex-wrap w-80 h-40 text-2xl font-bold'>
            <div className='w-20 h-20 rounded-full overflow-hidden'>
                <img src={img} />
            </div>
            <p className='text-center w-48'>
                {name}
            </p>
        </a>
    )
}

export default PersonCard