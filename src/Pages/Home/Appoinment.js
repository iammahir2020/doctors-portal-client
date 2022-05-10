import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appoinmentImg from "../../assets/images/appointment.png";

const Appoinment = () => {
  return (
    <div class="hero md:min-h-screen">
      <div class="hero-content flex-col lg:flex-row lg:px-20">
        <img
          src={doctor}
          class="max-w-100 lg:max-w-sm hidden md:block"
          alt="treatment"
        />
        <div className="lg:pl-20">
          <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
            Appoinment
          </p>
          <h1 class="pt-4 text-2xl lg:text-2xl font-bold">
            Make an appointment Today
          </h1>
          <p class="py-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn border-0 bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
