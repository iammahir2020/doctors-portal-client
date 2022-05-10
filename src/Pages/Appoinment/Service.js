import React from "react";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card shadow-xl">
      <div class="card-body items-center text-center">
        <p className="font-semibold text-xl text-secondary">{name}</p>
        {!slots.length ? (
          <>
            <p className="text-[red]">No Slot Available</p>
            <p className="text-sm">Try Another Date</p>
          </>
        ) : (
          <>
            <p>{slots[0]}</p>
            <p className="text-sm">{slots.length} Slot available</p>
          </>
        )}
        <div class="card-actions">
          <button
            disabled={slots.length === 0}
            className="btn border-0 bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold"
          >
            Book Appoinment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
