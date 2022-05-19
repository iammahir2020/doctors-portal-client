import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
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
            <p className="text-sm">Price: ${price}</p>
          </>
        )}
        <div className="card-actions">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn modal-button border-0 bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
