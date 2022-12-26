import React from 'react'

// PersonCard is a functional component that displays a card for a person,
// including the person's name, image, and a link to their profile.
function PersonCard({ name, img, link }) {
    return (
        // The anchor element wraps the card and allows it to function as a link to the person's profile.
        <a href={link} className='card flex items-center justify-between flex-wrap w-80 h-40 text-2xl font-bold'>
            <div className='w-20 h-20 rounded-full overflow-hidden'>
                {/* The image has an alt attribute for accessibility, with the value being the person's name. */}
                <img src={img} alt={name} />
            </div>
            <p className='text-center w-48'>
                {name}
            </p>
        </a>
    )
}

export default PersonCard