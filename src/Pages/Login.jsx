import React, { useState } from 'react';
import './Style.css'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {logIn } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            navigate('/')
          } catch (error) {
            console.log(error);
            setError(error.message)
          }
    };
  return (
        <div className='bg'>
            <div className='signupbox-container'>
                <h1>Sign In</h1>
                {error ? <p>{error}</p> : null}
            <div className='form-field'>    
            <form onSubmit={handleSubmit} class="form">
                <input  onChange={(e) => setEmail(e.target.value)} type="email"  placeholder='Email' autoComplete='email'/>
                <input  onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' autoComplete='current-password'/>
                <button> Signin</button>
            <div>
            <p>Need Help?</p>
            </div>
            <p><span> New to Blindside</span>{' '}
            <Link to='/Signup'><b>Sign Up</b></Link>
            </p>
            </form>
        </div>
        </div>
    </div>     
  );
};

export default Login;