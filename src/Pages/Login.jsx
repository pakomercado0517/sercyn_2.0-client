import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginClient, navigationUrl } from "../redux/actions";
import Swal from "sweetalert2";

export function validate(loginData) {
  let error = [];
  //email validation
  if (!loginData.email) {
    error.email = "Por favor, ingresa tu email valido...";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(loginData.email)
  ) {
    error.email =
      "El email solo puede contener letras, números, puntos, guiones, '@' y guión bajo";
  }
  if (!loginData.password) error.password = "Ingresa tu contraseña...";
  return error;
}

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation_url = useSelector((state) => state.navigation_url);
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...loginData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = Object.keys(errors);
    try {
      if (!object.length) {
        await dispatch(loginClient(loginData));
        await Swal.fire({
          title: `Bienvenido!`,
          text: "Has iniciado sesión correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then(async (res) => {
          if (res.isConfirmed) {
            await navigate("/");
            await navigate(navigation_url.length > 0 ? navigation_url : "/", {
              replace: true,
            });
            await dispatch(navigationUrl(""));
          }
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Email o contraseña incorrecto, verificalo o registrate...",
        icon: "error",
        confirmButtonColor: "red",
        confirmButtonText: "Cerrar",
      });
    }
  };

  console.log("navigation_url", navigation_url);

  return (
    <div
      className={`border border-slate-600 rounded-lg text-slate-500 w-11/12 mx-auto lg:w-1/3`}
    >
      <div
        className={`bg-[#007ea7] text-white flex justify-around items-center`}
      >
        <h1 className={`text-xl`}>Náutica SerCyn</h1>
        <img
          className={`w-1/4 h-auto my-2`}
          src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
          alt="sercyn_logo"
        />
      </div>
      <div className={`tittle_containe my-5`}>
        <h1 className={`text-center text-2xl`}>Inicia Sesión</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={`flex flex-col items-center`}>
          <label htmlFor="email" className={`text-lg`}>
            Correo Electronico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className={`rounded-lg border w-60 h-8 focus:border-2 focus:border-blue-500`}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            className={`rounded-lg border w-60 h-8 mb-3 focus:border-blue-500`}
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <Link to="#">
            <span className={`text-sm underline`}>
              Olvidaste tu contraseña?
            </span>
          </Link>
        </div>
        <div className={`flex justify-center my-5`}>
          <button
            className={`w-40 h-8 border border-slate-700 focus:bg-slate-600 focus:text-white rounded-lg`}
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
      <div className={`flex justify-around mb-4`}>
        <span className={`text-lg`}>Aún no tienes cuenta?</span>
        <Link to="/signin">
          <p className={`text-lg text-blue-400 underline`}>Regístrate</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
