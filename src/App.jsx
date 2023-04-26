import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Boats from "./Pages/Boats";
import Destinations from "./Pages/Destinations";
import BoatDetails from "./Pages/BoatDetails";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import ClientProfile from "./Pages/ClientProfile";
import PaymentResponse from "./Pages/PaymentResponse";
import UserLogin from "./Pages/UserLogin";
import UserDashboard from "./Pages/UserDashboard";
import Footer from "./Components/Footer";
import Payment from "./Pages/Payment";
import Boatform2 from "./Pages/Boatform2";
import Rating from "../src/Pages/Rating";
import UpdateClientProfile from "./Pages/UpdateClientProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boats" element={<Boats />} />
        <Route path="/boats/details" element={<BoatDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/form/boat" element={<Boatform2 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/client_profile" element={<ClientProfile />} />
        <Route path={`/payment/response`} element={<PaymentResponse />} />
        <Route path={`/getUser/login`} element={<UserLogin />} />
        <Route path={`/getUser/dashboard`} element={<UserDashboard />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/client/updateProfile" element={<UpdateClientProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
