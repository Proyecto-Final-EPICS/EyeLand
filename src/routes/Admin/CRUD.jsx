import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AlertContext } from '../../contexts/AlertContext'
import Title from '../../components/common/Title'
import { DataGrid } from '@mui/x-data-grid'

function CRUD() {

    const { handleAlert } = useContext(AlertContext)
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])
    const title = useLocation().pathname.split('/')[2]



    useEffect(() => {
        const tasks = [
            {
                "id_task": 1,
                "nombre": "Task 1",
                "descripcion": "Description 1",
                "orden": 1
            }
        ]
        // get columns from tasks
        setColumns(Object.keys(tasks[0]).map((item) => {
            return {
                field: item,
                headerName: item,
                width: 130,
                editable: true
            }
        }))


        // get rows from res
        setRows(tasks.map((item) => {
            return {
                id: item.id_task,
                ...item
            }
        }))
    }, [])

    return (
        <div className='crud'>
            <Title title={title} textColor={'text-black'} />
            <div>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    autoHeight
                    autoPageSize
                />
            </div>
        </div>
    )
}

export default CRUD