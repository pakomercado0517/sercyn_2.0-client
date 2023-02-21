import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Boats from "./Pages/Boats";
import Destinations from "./Pages/Destinations";
import BoatDetails from "./Pages/BoatDetails";
import BoatForm from "./Pages/BoatForm";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import ClientProfile from "./Pages/ClientProfile";
import PaymentResponse from "./Pages/PaymentResponse";
import UserLogin from "./Pages/UserLogin";
import UserDashboard from "./Pages/UserDashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boats" element={<Boats />} />
        <Route path="/boats/details" element={<BoatDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/form/boat" element={<BoatForm />} />
        <Route />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/client_profile" element={<ClientProfile />} />
        <Route path={`/payment/response`} element={<PaymentResponse />} />
        <Route path={`/getUser/login`} element={<UserLogin />} />
        <Route path={`/getUser/dashboard`} element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
