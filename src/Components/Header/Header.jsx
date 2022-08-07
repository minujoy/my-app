import React, { useState } from "react";
import "./Header.css";
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'


const Header = () => {
  const { user, logOut } = UserAuth()
  //console.log(user.email)
  const [Mobile, setMobile] = useState(false)
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <div className='container flexSB'>
        <nav className='flexSB'>
          <div className='logo'>
            <Link to='/'>BLINDSIDE</Link> 
          </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Series</a>
              </li>
              <li>
                <a href='/'>Movies</a>
              </li>
              <li>
                <a href='/'>Trending</a>
              </li>
          </ul>
          {user?.email ? (
        <div>
          <Link to='/Account'>Account</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to='/Login'>
            <button>Sign In</button>
          </Link>
          <Link to='/Signup'>
            <button>
              Sign Up
            </button>
          </Link>
        </div>
      )}
        </nav>
        </div>
      </header>
    </>
  )
}

export default Header;