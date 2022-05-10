import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import AvailableAppoinment from "./AvailableAppoinment";
import Banner from "./Banner";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Banner date={date} setDate={setDate}></Banner>
      <AvailableAppoinment date={date}></AvailableAppoinment>
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;
