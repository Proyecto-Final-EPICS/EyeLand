import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

    const [classActive, setClassActive] = useState('')
    const [selected, setSelected] = useState(0)

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        window.location.reload()
    }

    const handleSelect = (index) => {
        setSelected(index)
        if (index === 0) {
            setClassActive('top-0')
        } else {
            setClassActive('top-[61px]')
        }
    }

    const location = useLocation()

    useEffect(() => {
        if (location.pathname.split('/')[2] === 'home') {
            handleSelect(0)
        } else if (location.pathname.split('/')[2] === 'crud') {
            handleSelect(1)
        }
    }, [location])

    return (
        <div className='navbar'>
            <div>
                <img src="Logo.svg" />
                <div className='navButtons'>
                    <div className={classActive}>
                    </div>
                    <div>
                        <Link to={'home'}>
                            <button className=" bg-primary">
                                <img src="Home.svg" />
                            </button>
                        </Link>
                        <Link to={'crud/Instituciones'}>
                            <button className=" bg-primary">
                                <img src="CRUD.svg" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <button className='bg-red-600' onClick={handleLogout}>
                <img src="Logout.svg" />
            </button>
        </div>
    )
}

export default Navbar