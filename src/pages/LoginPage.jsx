import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginValidationShemas } from '../validationShemas/login'
import { Navigate, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  let token = sessionStorage.getItem('token')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidationShemas),
  })

  const onSubmit = async data => {
    console.log(data.password, data.email)
    try {
      const resp = await axios.post('http://challenge-react.alkemy.org', data)
      const tokenReceived = resp.data.token
      // console.log({ data })
      sessionStorage.setItem('token', tokenReceived)
      navigate('/list')
    } catch (error) {
      throw new Error('Error when logging in')
    }
  }

  return (
    <>
      {token && <Navigate to='/list' />}
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card mt-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Login</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      E-mail:
                    </label>
                    <input
                      className='form-control'
                      type='email'
                      name='email'
                      placeholder='example@outlook.us'
                      {...register('email')}
                    />
                    {errors.email && (
                      <span className='text-danger'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Password:
                    </label>
                    <input
                      className='form-control'
                      type='password'
                      name='password'
                      placeholder='*******'
                      {...register('password')}
                    />
                    {errors.password && (
                      <span className='text-danger'>
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <button className='btn btn-dark' type='submit'>
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
