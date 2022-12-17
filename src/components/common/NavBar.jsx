import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar'>
            <div>
                <img src="MiniLogo.svg" alt="" />
            </div>
            <div>
                <Link className='button'>
                    Soy profesor
                </Link>
            </div>
        </div>
    )
}

export default NavBar