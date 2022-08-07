import React, { useState }  from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserAuth } from '../../Context/AuthContext'

const UpCard = ({ item: { id, cover, name, time } }) => {
  
    const {user, logIn} = UserAuth();
    const [email, password] = useState('');
    const navigate = useNavigate()
    const playButton = async () => {
      if (user?.email) {
        await logIn(email, password)
      } else {
        alert('Please log in to play');
        navigate('/')
      }
    };
    return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        
        <div onClick={playButton} className='text'>
          <h3>{name}</h3>
          <span>{time}</span> <br />
          <Link to={`/OnePage/${id}`}>
          <button className='primary-btn'>
            
             <i className='fa fa-play'></i>PLAY NOW
           
          </button>
          
          </Link>
        </div>
       
      </div>
    </>
  )
}

export default UpCard
