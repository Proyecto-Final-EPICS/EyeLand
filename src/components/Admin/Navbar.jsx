import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className='navbar'>
            <div>
                <button className="button bg-cuaternary">Crear task</button>
                <button className="button bg-cuaternary">Crear institución</button>
                <div>
                    <h3>Tablas</h3>
                    <hr />
                    <div className='tables'>
                        <Link className='table' to={'Instituciones'}>Instituciones</Link>
                        <Link className='table' to={'Profesores'}>Profesores</Link>
                        <Link className='table' to={'Cursos'}>Cursos</Link>
                        <Link className='table' to={'Estudiantes'}>Estudiantes</Link>
                        <Link className='table' to={'Grupos'}>Grupos</Link>
                        <Link className='table' to={'Tasks'}>Tasks</Link>
                        <Link className='table' to={'Link-PreTask'}>Link-PreTask</Link>
                        <Link className='table' to={'Preguntas'}>Preguntas</Link>
                        <Link className='table' to={'Opciones'}>Opciones</Link>
                        <Link className='table' to={'Historial'}>Historial</Link>
                    </div>
                </div>
            </div>
            <button className='button bg-secondary'>Cerrar sesión</button>
        </div>
    )
}

export default Navbar