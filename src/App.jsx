import { Routes, Route, useLocation } from "react-router-dom";
import NavbarApp from "./Pages/NavbarApp";
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
import VerifyEmailSuccess from "./Pages/VerifyEmailSuccess";
import ResetPassword from "./Pages/ResetPassword";
import ResetPasswordLink from "./Components/ResetPasswordLink";
import "../node_modules/react-date-picker/dist/DatePicker.css";
import "../node_modules/react-calendar/dist/Calendar.css";
// import Chat from "./Pages/Chat";
// import ChatMessages from "./Components/chat/ChatMessages";

function App() {
  const location = useLocation();

  return (
    <div className="App min-h-screen">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boats" key={location.key} element={<Boats />} />
        <Route path="/boats/details" element={<BoatDetails />} />
        <Route path="/form/boat" element={<Boatform2 />} />
        <Route
          path="/destinations"
          key={location.key}
          element={<Destinations />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/client_profile" element={<ClientProfile />} />
        <Route path={`/payment/response`} element={<PaymentResponse />} />
        <Route path={`/getUser/login`} element={<UserLogin />} />
        <Route path={`/getUser/dashboard`} element={<UserDashboard />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/client/updateProfile" element={<UpdateClientProfile />} />
        <Route path="/mailVerified" element={<VerifyEmailSuccess />} />
        <Route path="/request/resetPassword" element={<ResetPasswordLink />} />
        <Route path="/:email/resetPassword" element={<ResetPassword />} />'
        {/* <Route path="/chat/" element={<Chat />} />
        <Route path="/chat/room/:id" element={<ChatMessages />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
