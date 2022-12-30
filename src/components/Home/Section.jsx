import React from 'react'
import PersonCard from './PersonCard'

function Section({ title, people }) {
    return (
        <div className='flex flex-col items-center justify-center xl:px-44 mt-10'>
            <div className='flex items-center justify-center gap-7'>
                <h2 className='text-black text-lg md:text-2xl xl:text-2xl'>
                    {title}
                </h2>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-5'>
                {
                    people.map((person, index) => {
                        return (
                            <PersonCard
                                key={index}
                                name={person.name}
                                img={person.img}
                                link={person.link}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section