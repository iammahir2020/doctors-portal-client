import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots, price } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: event.target.date.value,
      slot: event.target.slot.value,
      price,
      patientName: event.target.name.value,
      patientEmail: event.target.email.value,
      phone: event.target.number.value,
    };
    // console.log(booking);

    fetch("https://safe-shelf-64042.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(
            `Appoinment is set, ${format(date, "PP")} at ${
              event.target.slot.value
            }`
          );
        } else {
          toast.error(
            `You already have that booking on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null); // for closing modal
      });

    // setTreatment(null); // for closing modal
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
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              id="price"
              name="price"
              value={"$ " + price}
              className="input input-bordered w-full max-w-lg"
              disabled
            />
            <input
              type="text"
              id="name"
              name="name"
              value={user?.displayName}
              className="input input-bordered w-full max-w-lg"
              disabled
            />

            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              className="input input-bordered w-full max-w-lg"
              disabled
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
