import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinmentImg from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Appoinment = () => {
  return (
    <section
      style={{
        background: `url(${appoinmentImg})`,
      }}
    >
      <div className="flex justify-center items-center text-white md:mb-[100px] md:mt-[200px] px-6 max-w-7xl mx-auto">
        <div className="md:flex-1 hidden md:block">
          <img src={doctor} className="max-w-100 mt-[-150px]" alt="treatment" />
        </div>
        <div className="md:flex-1 py-16">
          <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
            Appoinment
          </p>
          <h1 className="pt-4 text-4xl ">Make an appointment Today</h1>
          <p className="py-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
