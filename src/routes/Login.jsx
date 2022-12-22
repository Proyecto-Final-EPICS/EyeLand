import { useState, useContext } from 'react'
import { AlertContext } from '../contexts/AlertContext'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/Login/NavBar'
import Footer from '../components/common/Footer'
import axios from 'axios'
import ReactLoading from 'react-loading';

const INITIAL_STATE = {
    username: '',
    password: ''
}

const VALIDATION = {
    username: (value) => !value && 'El usuario es requerido',
    password: (value) => !value && 'La contraseña es requerida'
}

function Login() {

    const [form, setForm] = useState(INITIAL_STATE)
    const [loading, setLoading] = useState(false)
    const { handleAlert } = useContext(AlertContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const sendForm = (role) => {
        setLoading(true)
        const url = role === 'admin' ? '' : 'https://epics-si-api.onrender.com/api/login'
        axios.defaults.timeout = 10000
        axios.post(url, form)
            .then(res => {
                handleAlert('Bienvenido', 'success')
                role === 'admin' ? navigate('/admin/home') : navigate('/teacher/home')
            }).catch(err => {
                const error = err.response ? err.response.data : 'Error de conexión, intentelo más tarde'
                handleAlert(error, 'error')
            }).then(() => {
                setLoading(false)
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
        navigate('/admin/home')
        // sendForm(username === 'admin' ? 'admin' : 'teacher')
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