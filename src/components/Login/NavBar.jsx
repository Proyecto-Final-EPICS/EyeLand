import React from 'react'
import { useNavigate } from 'react-router-dom'

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
        </div>
    )
}

export default NavBar