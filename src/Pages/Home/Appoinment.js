import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appoinmentImg from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Appoinment = () => {
  return (
    <section
      style={{
        background: `url(${appoinmentImg})`,
      }}
      className="flex justify-center items-center text-white md:mb-[100px] md:mt-[200px] px-6 lg:px-12"
    >
      <div className="md:flex-1 hidden md:block">
        <img src={doctor} class="max-w-100 mt-[-100px]" alt="treatment" />
      </div>
      <div className="md:flex-1 py-16">
        <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
          Appoinment
        </p>
        <h1 class="pt-4 text-4xl ">Make an appointment Today</h1>
        <p class="py-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default Appoinment;
