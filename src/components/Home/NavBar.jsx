import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavBar({ showTeacherButton = true }) {

    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-between px-8 py-3'>
            <div>
                <img src="MiniLogo.svg" alt="" className='cursor-pointer'
                    onClick={
                        () => {
                            navigate('/')
                        }
                    }
                />
            </div>
            {
                showTeacherButton && (
                    <div>
                        <Link className='button bg-primary text-white text-base' to={'/login'}>
                            Soy profesor
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default NavBar