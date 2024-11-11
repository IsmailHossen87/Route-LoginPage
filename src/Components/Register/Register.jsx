import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
   const {createUser} = useContext(AuthContext)

    const handleSubmitRegister = event => {
        event.preventDefault()
        const navigate = useNavigate()


        const email = event.target.email.value;
        const password = event.target.password.value;
         
        createUser(email,password)
        .then((res) => {
          console.log(res)
          event.target.reset()
          navigate('/')
        })
        .catch(error => {
          console.log(error.message)
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold">Register Now!</h1>
          </div>
          <div className=" bg-base-100 w-full  shrink-0 shadow-2xl">
            <form  onSubmit={handleSubmitRegister} className="card-body">
                {/* name */}
              <div className="form-control">
                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
              </div>
                {/* email */}
              <div className="form-control">
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                {/* password */}
              </div>
              <div className="form-control">
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className='text-xl py-4 mx-2'>Alredy have an Account <Link className='underline font-bold text-blue-600' to={'/login'}>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;
