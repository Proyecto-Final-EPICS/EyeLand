import React from 'react';

// The Power component displays a card with an image and text
// The component accepts the following props:
// - title: the title to display, should be a string
// - description: the description to display, should be a string
// - img: the URL of the image to display, should be a string
// - index: the index of the current card, should be a number
// - setClassPowerD: a function to set the class name of the card's description, should be a function that accepts a string
// - setCounter: a function to set the counter value, should be a function that accepts a number
// - classPowerD: the class name of the card's description, should be a string
function Power({ title, description, img, index, setClassPowerD, setCounter, classPowerD }) {
    // The component returns a div element with an image and a description div element
    // The div element has a class name and an onMouseEnter event handler
    return (
        <div
            className="bg-cuaternary p-5 shadow-lg rounded-lg hover:cursor-pointer relative"
            onMouseEnter={() => {
                // When the mouse enters the div element, the setClassPowerD function is called with the updated class name
                // The setCounter function is also called with the index value
                setClassPowerD(classPowerD.replace('opacity-0', 'opacity-100'));
                setCounter(index);
            }}
        >
            <img src={img} alt={title} className="w-16 h-16" />
            <div
                className={`absolute text-center w-96 mt-10 -translate-x-[41%] transition-all duration-500 ease-in-out ${classPowerD}`}
            >
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-base font-light">{description}</p>
            </div>
        </div>
    );
}

export default Power;
