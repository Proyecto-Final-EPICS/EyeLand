import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbarCRUDTable({ title, link }) {
    return (
        <Link className='text-white hover:bg-white hover:bg-opacity-30 px-3 rounded-lg flex items-center h-10' to={link}>
            <img src="Table.svg" alt="" className='mr-2' />
            {title}
        </Link>
    )
}

export default AdminNavbarCRUDTable