import React, { useState } from "react"
import "./Home.css"
import { homeData } from "../../dummydata"
import Home from "./Home"

const Homes = () => {
  const [items] = useState(homeData)

  return (
    <>
      <section className='home'>
        <Home items={items} />
      </section>
      <div className='mragin'></div>
    </>
  )
}

export default Homes