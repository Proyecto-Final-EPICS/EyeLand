import { useState, useContext } from 'react'
import NavBar from '../components/Login/NavBar'
import Footer from '../components/common/Footer'
import { AlertContext } from '../contexts/AlertContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../contexts/UserContext'
import ReactLoading from 'react-loading';
import { Alert } from '@mui/material'

const INITIAL_STATE = {
    username: '',
    password: ''
}

const VALIDATION = {
    username: (value) => {
        if (!value) {
            return 'El usuario es requerido'
        }
    },
    password: (value) => {
        if (!value) {
            return 'La contraseña es requerida'
        }
    }
}

function Login() {

    const [form, setForm] = useState(INITIAL_STATE)
    const [loading, setLoading] = useState(false)
    const { handleAlert } = useContext(AlertContext)
    const { user, setUser, token, setToken } = useContext(UserContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = form
        const usernameError = VALIDATION.username(username)
        const passwordError = VALIDATION.password(password)
        if (usernameError) {
            handleAlert(usernameError, 'error')
            return
        }
        if (passwordError) {
            handleAlert(passwordError, 'error')
            return
        }

        setLoading(true)
        // send data to server
        axios.post('https://epics-si-api.onrender.com/api/login', form)
            .then(res => {
                // save token in local storage
                setUser(res.data.user)
                setToken(res.data.token)

                handleAlert('Bienvenido', 'success')
                navigate('/admin/home')
            }).catch(err => {
                handleAlert(err.data, 'error')
            }).then(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <NavBar />
            <div className='login'>
                <div>
                    <img src="Logo.svg" />
                    <div className='card'>
                        <h2>Iniciar sesión</h2>
                        <form onSubmit={handleSubmit}>
                            <div >
                                <label htmlFor='username'>Usuario</label>
                                <input type='username' name='username' id='username' value={form.username} onChange={handleChange} />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor='password'>Contraseña</label>
                                <input type='password' name='password' id='password' value={form.password} onChange={handleChange} />
                            </div>
                            <button className='button bg-primary text-white' type='submit'>
                                {loading ? <ReactLoading type='spin' color='white' height={20} width={20} /> : 'Iniciar sesión'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login