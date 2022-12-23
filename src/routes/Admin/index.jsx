import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Admin/Navbar'

function Admin() {
    return (
        <div className='flex'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Admin