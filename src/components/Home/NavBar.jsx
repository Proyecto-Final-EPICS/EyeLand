import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavBar({ showTeacherButton = true }) {

    const navigate = useNavigate()

    return (
        <div className='flex mx-5 my-5 relative justify-center items-center md:justify-start'>
            <div className=' cursor-pointer'>
                <img src="MiniLogo.svg" alt="" className='w-32'
                    onClick={
                        () => {
                            navigate('/')
                        }
                    }
                />
            </div>
            {
                showTeacherButton && (
                    <div className='absolute right-0'>
                        <Link className='bg-primary text-white text-base font-bold rounded-lg flex items-center justify-center md:px-5 md:py-3 shadow-lg hover:opacity-80 active:opacity-70 px-2 py-2' to={'/login'}>
                            <img src="Login.svg" alt="" className='md:hidden' />
                            <p className='hidden md:block'>
                                Soy profesor
                            </p>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default NavBar