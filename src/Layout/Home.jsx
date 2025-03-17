import React from "react";
import Hero from "../Components/Home/Hero";
import Whoweare from "../Components/Home/Whoweare";
import Founders from "../Components/Home/Founders";

import GrowthStory from "../Components/Home/GrowthStory";
import Whatsets from "../Components/Home/Whatsets";

function Home() {
  return (
    <>
      <Hero />
      <Whoweare />
      <Founders />
      <GrowthStory />
      <Whatsets/>
    </>
  );
}

export default Home;
