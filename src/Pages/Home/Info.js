import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  const items = [
    {
      _id: 1,
      logo: clock,
      heading: "Opening Hours",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
      bg: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      _id: 2,
      logo: marker,
      heading: "Visit our location",
      info: "Lorem ipsum dolor sit ag elit. Adipisci",
      bg: "bg-accent",
    },
    {
      _id: 3,
      logo: phone,
      heading: "Contact us now",
      info: "+000 123 456 789",
      bg: "bg-gradient-to-r from-secondary to-primary",
    },
  ];

  return (
    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 lg:px-12">
      {items.map((item) => (
        <InfoCard key={item._id} item={item}></InfoCard>
      ))}
    </div>
  );
};

export default Info;
