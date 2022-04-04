import type { NextPage } from 'next'

const Login: NextPage = () => {
    return (
        <div>
            <div className='container-fluid vh-100' style={{ marginTop: 5 + 'px' }}>
                <div className='' style={{ marginTop: 50 + 'px' }}>
                    <div className='rounded d-flex justify-content-center'>
                        <div className='col-md-4 col-sm-12 shadow-lg p-5 bg-light'>
                            <div className='text-center'>
                                <h3 className='text-primary'>Sign In</h3>
                            </div>
                            <form>
                                <div className='p-4'>
                                    <div className='input-group mb-3'>
                                        <span className='input-group-text bg-primary'>
                                            <i className='bi bi-person-plus-fill text-white'></i>
                                        </span>
                                        <input type='text' className='form-control' placeholder='Username' />
                                    </div>
                                    <div className='input-group mb-3'>
                                        <span className='input-group-text bg-primary'>
                                            <i className='bi bi-key-fill text-white'></i>
                                        </span>
                                        <input type='text' className='form-control' placeholder='Password' />
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