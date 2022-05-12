import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const booking = {
      serviceId: _id,
      serviceName: name,
      date: event.target.date.value,
      slot: event.target.slot.value,
      name: event.target.name.value,
      email: event.target.email.value,
      number: event.target.number.value,
    };
    // console.log(booking);

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Your appoinment is confirm");
        }
      });

    setTreatment(null); // for closing modal
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="mt-10 grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              value={format(date, "PP")}
              id="date"
              name="date"
              className="input input-bordered w-full max-w-lg"
              disabled
            />
            <select
              id="slot"
              name="slot"
              className="select select-bordered w-full max-w-lg"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-lg"
              required
            />
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-lg"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-lg"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent text-white w-full max-w-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
