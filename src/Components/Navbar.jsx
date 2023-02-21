import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Images/logo_sercyn2.png";
import { clientLogout } from "../redux/actions";
import Swal from "sweetalert2";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clientLogged = useSelector((state) => state.clientLogged);
  const handleClick = async () => {
    dispatch(clientLogout());
    await Swal.fire({
      title: `Cerraste Sesión!`,
      text: "Vuelve pronto",
      icon: "warning",
      confirmButtonText: "Aceptar",
    }).then((res) => {
      if (res.isConfirmed) {
        navigate("/login");
      }
    });
  };

  console.log("clientLogged", clientLogged);

  return (
    <div>
      <div
        className={`mx-auto my-2 rounded-xl w-11/12 h-20 bg-white opacity-75 flex flex-row border border-solid shadow-2xl shadow-blue-500`}
      >
        <div
          className={`flex ml-2 md:ml-7 items-center justify-center bg-white rounded-full`}
        >
          <img
            className={`z-10 w-6 h-8 md:w-10 md:h-12`}
            src={logo}
            alt="logo"
          />
        </div>
        <div className={`w-screen flex flex-row`}>
          <div className={`flex flex-row`}>
            <div className="w-[80vw] mr-3 z-10 bg-white flex items-center justify-end">
              <ul className={`flex flex-row text-xs md:text-lg text-slate-500`}>
                <Link to="/">
                  <li className={`pl-2 mx-2`}>Inicio</li>
                </Link>
                <Link to="/boats">
                  <li className={`pl-2 mx-2`}>Embarcaciones</li>
                </Link>
                <Link to="/destinations">
                  <li className={`pl-2 mx-2`}>Destinos</li>
                </Link>
                {clientLogged.length === 0 ? (
                  <Link to="/signin">
                    <li className={`pl-2 mx-2`}>SignIn</li>
                  </Link>
                ) : (
                  <>
                    <Link to="/client_profile">
                      <li className={`pl-2 mx-2`}>Mi perfil</li>
                    </Link>
                    <li onClick={handleClick} className={`pl-2 mx-2`}>
                      Logout
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
