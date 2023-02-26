import React from 'react'

function GroupCard({ group }) {

    return (
        <div className='w-72 h-72 bg-slate-100 rounded-lg shadow-lg p-5'>
            <h5 className='font-bold text-2xl mb-2'>{group.name}</h5>
            <div className='h-0.5 w-full bg-black opacity-50 mb-5' />
            {
                group.students.map((student, index) => {
                    return (
                        <div className='flex items-center gap-3 mt-5' key={index}>
                            <div className='bg-cuaternary h-12 w-12 rounded-lg shadow-lg p-2'>
                                <img src={student.role === "Super hearing" ? "Power1.svg" : student.role === "Memory pro" ? "Power2.svg" : "Power3.svg"} alt="" />
                            </div>
                            <p className='font-medium'>{student.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GroupCard