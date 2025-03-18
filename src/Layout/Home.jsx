import React from "react";
import Hero from "../Components/Home/Hero";
import Whoweare from "../Components/Home/Whoweare";
import Founders from "../Components/Home/Founders";

import GrowthStory from "../Components/Home/GrowthStory";
import Whatsets from "../Components/Home/Whatsets";
import Join from "../Components/Home/Join";
import Standard from "../Components/Home/Standard";

function Home() {
  return (
    <>
      <Hero />
      <Whoweare />
      <Founders />
      <GrowthStory />
      <Whatsets/>
      <Standard/>
      <Join/>
    </>
  );
}

export default Home;
