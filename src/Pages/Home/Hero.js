import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Hero = () => {
  return (
    <div
      class="px-6 lg:px-12 hero py-8 lg:py-0 w-full lg:min-h-screen bg-local bg-no-repeat bg-cover"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-100 lg:max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 class="pt-8 lg:pt-0  text-4xl lg:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p class="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
