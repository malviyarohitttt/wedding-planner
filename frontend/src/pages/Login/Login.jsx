import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Login Here</h1>
        <form action="">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div>
              <h6 className="linkBtn">Don't have an account <Link className="link" to='/register'>Click here</Link></h6>
            </div>
            <div>
              <button type='submit' className='submitButton'>Submit</button>
            </div>
          </form>
        </form>
      </div>
    </>
  );
}

export default Login;
