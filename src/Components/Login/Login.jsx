import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {signInUser,googleLogin} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInUser(email,password)
        .then(res => {
          console.log(res)
          // erase box
          event.target.reset()
          navigate('/')
        })
        .catch(error =>{
          console.log(error)
        })
    }
    const handlePopup =()=>{
      googleLogin()
      .then(res => {
        console.log(res.user)
      })
      .catch(error => {
        console.log(error.message)
      })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form  onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='text-xl py-4 mx-2'>Register Your account <Link className='underline font-bold text-blue-600' to={'/register'}>Register</Link></p>
            <p><button onClick={handlePopup} className='btn btnn-ghost'>Google </button></p>
          </div>
        </div>
      </div>
    );
};

export default Login;

