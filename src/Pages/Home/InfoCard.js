import React from "react";

const InfoCard = ({ item }) => {
  return (
    <div className={`pt-6 lg:pt-0 card lg:card-side ${item.bg} shadow-xl`}>
      <figure className="lg:pl-8">
        <img className="w-14" src={item.logo} alt="clock" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{item.heading}</h2>
        <p>{item.info}</p>
      </div>
    </div>
  );
};

export default InfoCard;
