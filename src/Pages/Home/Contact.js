import React from "react";
import appoinmentImg from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div
      style={{
        background: `url(${appoinmentImg})`,
      }}
      className="mt-20 mb-10 px-6 lg:px-12 py-12 text-white"
    >
      <p className="text-center uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
        Contact Us
      </p>
      <h3 className="text-center text-3xl">Stay Connected With Us</h3>
      <div className="text-accent mt-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Email Address"
            class="input w-full max-w-md"
            name="email"
            id="email"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            class="input w-full max-w-md"
            name="subject"
            id="subject"
            required
          />
          <textarea
            class="textarea w-full max-w-md"
            placeholder="Your Message"
            name="message"
            id="message"
            required
          ></textarea>
          <PrimaryBtn>Submit</PrimaryBtn>
        </form>
      </div>
    </div>
  );
};

export default Contact;
