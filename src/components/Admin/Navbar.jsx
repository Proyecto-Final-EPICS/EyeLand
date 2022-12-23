import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminNavbarButton from './AdminNavbarButton'

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
        <div className='flex flex-col bg-terciary h-screen justify-between py-5 px-3 items-stretch z-10 shadow-lateralNavbar fixed'>
            <div className='flex flex-col gap-3'>
                <img src="Logo.svg" className='w-10 mx-auto' />
                <div className='flex flex-row relative mt-5'>
                    <div className={'bg-white w-1 h-12 absolute -left-3 rounded-r-lg transition-all duration-300 ease-in-out ' + classActive}>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Link to={'home'}>
                            <AdminNavbarButton
                                background={'bg-primary'}
                                img={'Home.svg'}
                                title={'Home'}
                            />
                        </Link>
                        <Link to={'crud/instituciones'}>
                            <AdminNavbarButton
                                background={'bg-primary'}
                                img={'CRUD.svg'}
                                title={'CRUD'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <AdminNavbarButton
                background={'bg-red-600'}
                onClick={handleLogout}
                img={'Logout.svg'}
                title={'Cerrar sesión'}
            />
        </div>
    )
}

export default Navbar