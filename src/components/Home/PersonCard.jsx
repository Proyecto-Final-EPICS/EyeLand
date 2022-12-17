import React from 'react'

function PersonCard({ name, img, link }) {
    return (
        <a href={link} className={'card'}>
            <div>
                <img src={img} />
            </div>
            <p>
                {name}
            </p>
        </a>
    )
}

export default PersonCard