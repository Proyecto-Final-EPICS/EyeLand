import React, { useEffect, useState } from 'react'
import Title from '../../components/common/Title'

function AdminHome() {

    const [date, setDate] = useState(new Date())

    // create a useEffect to update the date every second
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='flex flex-col px-5 max-h-screen pb-5'>
            <h2>Bienvenido, administrador</h2>
            <h3>{
                date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }</h3>
            <div className='card w-fit mx-auto'>
                <Title title={'Diagrama de base de datos'} textColor={'text-black'} />
                <img src="DataBaseDiagram.png" className='-mt-16 mx-auto h-5/6' />
            </div>
        </div>
    )
}

export default AdminHome