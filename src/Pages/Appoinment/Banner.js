import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Banner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,

        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto hero py-8 lg:py-0 w-full lg:min-h-screen">
        <div className=" hero-content flex-col lg:flex-row-reverse gap-x-24">
          <img
            src={chair}
            className="max-w-100 lg:max-w-lg rounded-lg shadow-2xl"
            alt="dentist Chair"
          />
          <div className="min-w-100">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p>Pick a date to see available appoinments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
