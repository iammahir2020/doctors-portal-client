import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Hero = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,

        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto hero py-8 lg:py-0 w-full lg:min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-100 lg:max-w-lg rounded-lg shadow-2xl"
            alt="heroImage"
          />
          <div>
            <h1 className="pt-8 lg:pt-0  text-4xl lg:text-5xl font-bold">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
