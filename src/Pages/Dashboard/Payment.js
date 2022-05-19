import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1DgvA4VBRUNvSkX4jArgTW5i1hjc9B9CY0UZGioJjTo7fkqa9i1V9xLG5JJrn45PTCFW58pGk3WatodKyHEZvr00NwqU7l21"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://safe-shelf-64042.herokuapp.com/booking/${id}`;

  const { data: appoinment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  //   {_id, treatmentId, treatmentName, date, slot, price, patientName, patientEmail, phone}
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-accent text-3xl my-4 font-semibold">
        Complete Payment for <strong>{appoinment.treatmentName}</strong>
      </h2>
      <div class="card w-full max-w-lg bg-base-100 shadow-xl my-12 border border-black">
        <div class="card-body">
          <p className="font-bold">
            Hello,{" "}
            <span className="text-secondary">{appoinment.patientName}</span>
          </p>
          <h2 class="card-title">Pay for {appoinment.treatmentName}</h2>
          <p>
            Your Appoinment:{" "}
            <span className="text-secondary">{appoinment.date}</span> at{" "}
            <span>{appoinment.slot}</span>
          </p>
          <p>Please pay: ${appoinment.price}</p>
        </div>
      </div>
      <div class="card w-full max-w-lg bg-base-100 shadow-xl my-12 border border-black">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appoinment={appoinment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
