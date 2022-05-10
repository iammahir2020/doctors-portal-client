import React from "react";

const SingleTestimony = ({ testimony }) => {
  return (
    <div className="pt-10 px-5 md:px-10 pb-5 shadow-xl rounded-xl">
      <p>{testimony.comment}</p>
      <div className="flex gap-5 justify-start items-center">
        <div class="avatar py-5">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={testimony.image} />
          </div>
        </div>
        <div>
          <p className="font-bold">{testimony.name}</p>
          <p>{testimony.state}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimony;
