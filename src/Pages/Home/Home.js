import React from "react";
import Footer from "../Shared/Footer/Footer";
import Appoinment from "./Appoinment";
import Contact from "./Contact";
import Hero from "./Hero";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Appoinment></Appoinment>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
