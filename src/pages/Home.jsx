import React from "react";
import Banner from "../components/Banner";
import PopularGames from "../components/PopularGames";
import NewsLetter from "../components/NewsLetter";



const Home = () => {
  return (
    <div className="px-4 md:px-8 lg:px-10">
      <title>Home | GameHood</title>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <NewsLetter></NewsLetter>
      
    </div>
  );
};

export default Home;
