import type { NextPage } from 'next'
import { useState } from 'react'

const Login: NextPage = () => {
    const [fields, setFields] = useState({
        username: '',
        password: ''
    })

    async function loginHandler(e: any) {
        e.preventDefault()

        const loginReq = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fields)
        })

        if (!loginReq.ok) {

        }

        const loginRes = await loginReq.json()
        console.log(loginRes.message)
    }

    function fieldHandler(e: any) {
        const name = e.target.getAttribute('name')
        setFields({
            ...fields,
            [name]: e.target.value
        })
    }

    return (
        <div className='App backgroundContainer' style={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundSize: 'cover',
            overflow: 'hidden',
        }}>
            <div className='container-fluid vh-100'>
                <div className=''>
                    <div className='rounded d-flex justify-content-center'>
                        <div className='rounded col-md-4 col-sm-12 shadow-lg p-5 bg-light' style={{ marginTop: 50 + 'px' }}>
                            <div className='text-center'>
                                <h3 className='text-primary'>Sign In</h3>
                            </div>
                            <form onSubmit={loginHandler.bind(this)}>
                                <div className='p-4'>
                                    <div className='input-group mb-3'>
                                        <span className='input-group-text bg-primary'>
                                            <i className='bi bi-person-plus-fill text-white'></i>
                                        </span>
                                        <input type='text' name='username' onChange={fieldHandler.bind(this)} className='form-control' placeholder='Username' />
                                    </div>
                                    <div className='input-group mb-3'>
                                        <span className='input-group-text bg-primary'>
                                            <i className='bi bi-key-fill text-white'></i>
                                        </span>
                                        <input type='text' name='password' onChange={fieldHandler.bind(this)} className='form-control' placeholder='Password' />
                                    </div>
                                    <button className='btn btn-primary text-center mt-2' type='submit'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login