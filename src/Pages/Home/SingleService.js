import React from "react";

const SingleService = ({ item }) => {
  return (
    <div class="card shadow-xl">
      <figure class="px-10 pt-10">
        <img src={item.logo} alt="Shoes" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{item.heading}</h2>
        <p>{item.info}</p>
      </div>
    </div>
  );
};

export default SingleService;
