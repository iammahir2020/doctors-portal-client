import React from "react";
import flouride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import SingleService from "./SingleService";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Services = () => {
  const items = [
    {
      _id: 1,
      logo: flouride,
      heading: "Flouride Treatment",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    },
    {
      _id: 2,
      logo: cavity,
      heading: "Cavity Filling",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    },
    {
      _id: 3,
      logo: whitening,
      heading: "Teeth Whitening",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    },
  ];
  return (
    <div className="my-20 px-6 max-w-7xl mx-auto">
      <p className="text-center uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
        Our Services
      </p>
      <h3 className="text-center text-3xl">Services We Provide</h3>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <SingleService key={item._id} item={item}></SingleService>
        ))}
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row lg:px-20">
          <img
            src={treatment}
            className="max-w-100 lg:max-w-sm rounded-lg shadow-2xl"
            alt="treatment"
          />
          <div className="lg:pl-20">
            <h1 className="pt-8 lg:pt-0  text-4xl lg:text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
