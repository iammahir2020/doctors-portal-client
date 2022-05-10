import React from "react";
import flouride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import SingleService from "./SingleService";

const Services = () => {
  const items = [
    {
      id: 1,
      logo: flouride,
      heading: "Flouride Treatment",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    },
    {
      id: 2,
      logo: cavity,
      heading: "Cavity Filling",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    },
    {
      id: 3,
      logo: whitening,
      heading: "Teeth Whitening",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    },
  ];
  return (
    <div className="my-20">
      <p className="text-center uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
        Our Services
      </p>
      <h3 className="text-center text-3xl">Services We Provide</h3>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <SingleService id={item.id} item={item}></SingleService>
        ))}
      </div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row lg:px-20">
          <img
            src={treatment}
            class="max-w-100 lg:max-w-sm rounded-lg shadow-2xl"
            alt="treatment"
          />
          <div className="lg:pl-20">
            <h1 class="pt-8 lg:pt-0  text-4xl lg:text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn border-0 bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
