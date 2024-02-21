import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const Loginuser = async (e) => {
    e.preventDefault()

    try {
      let response = await fetch('http://localhost:8082/api/v1/auth/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }


      })
      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data))
        alert('Login Successfull')
      } else {
        alert(data.Message)
      }



    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className='d-flex justify-content-center item-center'>
          <button onClick={Loginuser} className='mt-5 btn btn-danger'>Login</button>
        </div>
        <Toaster />
      </div>

    </>
  )
}

export default Login