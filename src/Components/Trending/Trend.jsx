import React, { useState } from "react";
import { trending } from "../../dummydata";
import Home from "../Home/Home";
import "./Trend.css";

const Trend = () => {
  const [items] = useState(trending)
  return (
    <>
      <section className='trending'>
        <Home items={items} />
      </section>
    </>
  )
}

export default Trend;