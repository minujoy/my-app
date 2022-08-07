import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../dummydata";
import Upcomming from "../Upcoming/Upcoming";
import "./OnePage.css";


const OnePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  
  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id]);
  const [rec] = useState(recommended)
  
  return (
    <>
      {item ?(
        <>
          <section className='onePage'>
            <div className='onePageHeading'>
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className='container'>
              <video src={item.video} controls></video>
              <div className='para'>
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>An American science fiction horror drama television series created by the Duffer Brothers,primarily in the fictional town of Hawkins, Indiana, Stranger Things centers on a number of mysteries and supernatural events occurring around the town and their impact on an ensemble of child and adult characters.a group of young friends witness supernatural forces and secret government exploits.</p>
              </div>  
              <div className='comments-box'>
                <form class="form">
                  <input type='text' placeholder='Add a comment...'/>
                  <button type='submit' className='comments-button'>Comment </button>
                </form> 
              </div>
          </div>
          <div className='soical'>
            <h3>Share: </h3>
            <img src='https://img.icons8.com/color/48/000000/facebook-new.png' alt='' />
            <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png'alt='' />
            <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png'alt='' />
          </div>
          </section>
          <Upcomming items={rec} title='Recommended Movies' />
        </>
      ) : (
        "no"
      )}
    </>
  )
}

export default OnePage;