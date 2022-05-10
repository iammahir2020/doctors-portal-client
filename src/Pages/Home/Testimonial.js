import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import SingleTestimony from "./SingleTestimony";

const Testimonial = () => {
  const testimonials = [
    {
      _id: 1,
      image: people1,
      name: "Winson Herry",
      state: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      image: people2,
      name: "Winson Herry",
      state: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      image: people3,
      name: "Winson Herry",
      state: "California",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="my-20 px-6 lg:px-12">
      <div className="flex justify-between gap-4">
        <div>
          <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
            Testimonial
          </p>
          <h3 className=" text-3xl">What Our Patients Say</h3>
        </div>
        <div>
          <img className="w-24 md:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="lg:px-16 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimony) => (
          <SingleTestimony
            key={testimony._id}
            testimony={testimony}
          ></SingleTestimony>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
