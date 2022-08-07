import React, { useState } from "react";
import Homes from "../Components/Home/Homes";
import Trending from "../Components/Trending/Trend";
import Upcomming from "../Components/Upcoming/Upcoming";
import { latest, recommended, upcome } from "../dummydata";

const HomePage = () => {
  const [items] = useState(upcome)
  const [item] = useState(latest)
  const [rec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={rec} title='Recommended Movies' />
    </>
  )
}

export default HomePage;