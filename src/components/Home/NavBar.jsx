import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavBar() {

    const navigate = useNavigate()

    return (
        <div className='navbar'>
            <div>
                <img src="MiniLogo.svg" alt=""
                    onClick={
                        () => {
                            navigate('/')
                        }
                    }
                />
            </div>
            <div>
                <Link className='button' to={'/login'}>
                    Soy profesor
                </Link>
            </div>
        </div>
    )
}

export default NavBar