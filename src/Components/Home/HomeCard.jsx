import React, { useState }  from "react";
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'


const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => {
const { user, logIn  } = UserAuth();
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
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
              <label>{rating}(Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'></i> PLAY NOW
            </button>
          </div>
          <div onClick={playButton} className='palyButton row'>
            <Link to={`/OnePage/${id}`}>
              <button>
                <div className='img'>
                  <img src='./Images/play-button.png' alt='' />
                  <img src='./Images/play.png' alt='' className="change" />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard