import React from "react";
import Appoinment from "./Appoinment";
import Hero from "./Hero";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-6 lg:px-12">
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Appoinment></Appoinment>
    </div>
  );
};

export default Home;
