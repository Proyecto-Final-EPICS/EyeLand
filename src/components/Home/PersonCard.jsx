import React from 'react'

// PersonCard is a functional component that displays a card for a person,
// including the person's name, image, and a link to their profile.
function PersonCard({ name, img, link }) {
    return (
        // The anchor element wraps the card and allows it to function as a link to the person's profile.
        <a href={link} className='card flex items-center justify-between flex-wrap w-60 h-32 xl:w-80 xl:h-40 xl:text-2xl font-bold'>
            <div className=' w-16 h-16 xl:w-20 xl:h-20 rounded-full overflow-hidden'>
                {/* The image has an alt attribute for accessibility, with the value being the person's name. */}
                <img src={img} alt={name} />
            </div>
            <p className='text-center w-4/6'>
                {name}
            </p>
        </a>
    )
}

export default PersonCard