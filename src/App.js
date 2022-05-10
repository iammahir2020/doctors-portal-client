import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Reviews from "./Pages/Reviews/Reviews";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appoinment" element={<Appoinment />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
