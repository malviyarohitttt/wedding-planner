import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return <>
    <Navbar/>
    <div className="container mt-5">
    <h1 className="text-center">Register Here</h1>
        <form action="">
          <form>
            <div class="form-group">
              <label for="exampleInputName">Name</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputName"
                placeholder="Enter Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputMobile">Mobile</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputMobile"
                placeholder="Enter Mobile"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword"
                placeholder="Password"
              />
            </div>
            <div>
              <h6 className="linkBtn">Already have an account <Link className="link" to='/login'>Click here</Link></h6>
            </div>
            <div>
              <button type='submit' className='submitButton'>Submit</button>
            </div>
          </form>
        </form>
      </div>
  </>
}

export default Register
