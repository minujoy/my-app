import { React, useState } from 'react'
import './Style.css'
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signUp } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate('/')
          } catch (error) {
            console.log(error);
          }
    };

  return (
    <>
    <div className='bg'>
        <div className='signupbox-container'>
            <h1>Sign Up</h1>
        <div className='form-field'>    
        <form onSubmit={handleSubmit} class="form">
            <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder='Email' autoComplete='email'/>
            <input  onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' autoComplete='current-password'/>
            <button> SignUp</button>
            <div>
            <p>Need Help?</p>
            </div>
            <p><span> Already have an account?</span>{' '}
            <Link to='/login'><b>Sign In</b></Link>
            </p>
        </form>
        </div>

        </div>
    </div>     
    </>
  );
};

export default Signup;
