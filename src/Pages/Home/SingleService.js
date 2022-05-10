import React from "react";

const SingleService = ({ item }) => {
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img src={item.logo} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.heading}</h2>
        <p>{item.info}</p>
      </div>
    </div>
  );
};

export default SingleService;
