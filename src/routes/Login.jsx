import React from 'react'

function Login() {
    return (
        <div className='h-auto flex items-center justify-center flex-col w-auto'>
            <div className='relative w-fit'>

                <img src="Logo.svg" alt="" className='absolute w-96 -top-48 -right-48' />
                <div className='card flex flex-col items-stretch justify-center w-96 relative'>
                    <h2 className='text-center'>Iniciar sesión</h2>
                    <form className='my-5 w-full'>
                        <div className='form-group w-full'>
                            <label htmlFor='username' className='block'>Usuario</label>
                            <input type='username' name='username' id='username' />
                        </div>
                        <div className='form-group mt-5 w-full'>
                            <label htmlFor='password' className='block'>Contraseña</label>
                            <input type='password' name='password' id='password' />
                        </div>
                        <button className='button bg-primary text-white w-full mt-10' type='submit'>Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login