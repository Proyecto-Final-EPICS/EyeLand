import React from 'react'
import AdminNavbarCRUDTitle from './AdminNavbarCRUDTitle'
import AdminNavbarCRUDTable from './AdminNavbarCRUDTable'

const TABLES = [
    { title: 'Instituciones', link: 'instituciones' },
    { title: 'Profesores', link: 'profesores' },
    { title: 'Cursos', link: 'cursos' },
    { title: 'Estudiantes', link: 'estudiantes' },
    { title: 'Grupos', link: 'grupos' },
    { title: 'Tasks', link: 'tasks' },
    { title: 'Links-PreTask', link: 'links-pretask' },
    { title: 'Preguntas', link: 'preguntas' },
    { title: 'Opciones', link: 'opciones' },
    { title: 'Historial', link: 'historial' },
]

function NavBarCrud() {
    return (
        <div className='relative bg-primary px-5 shadow-lateralNavbar animate-appear'>
            <AdminNavbarCRUDTitle textColor='text-white' title='Tablas' />
            <div>
                <div className='flex flex-col'>
                    {
                        TABLES.map((table, index) => {
                            return (
                                <AdminNavbarCRUDTable title={table.title} link={table.link} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBarCrud