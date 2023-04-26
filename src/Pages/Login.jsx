import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginClient, navigationUrl } from "../redux/actions";
import Swal from "sweetalert2";
import GoogleAuth from "../Components/GoogleAuth";
import useValidate from "../Hooks/useValidate";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation_url = useSelector((state) => state.navigation_url);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const errors = useValidate({ formData });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = Object.keys(errors);
    console.log("object", object);
    try {
      if (object.length <= 3) {
        await dispatch(loginClient(formData));
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
      } else console.log("aqui no llego...");
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

  return (
    // second version
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Ff1280x720-9310_140985_7449.jpg?alt=media&token=3ced3d32-836d-4b3b-a644-c2f3d191d9bd"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Inicia Sesión en con tu cuenta
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Ingresa tu email"
                className={`w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none ${
                  errors?.email ? "border-red-600 focus:border-red-600" : ""
                }`}
                autoFocus
                required
                onChange={handleChange}
              />
              {errors?.email && (
                <span className="text-red-600">{errors?.email}</span>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                minLength={8}
                className={`w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none ${
                  errors?.password ? "border-red-600 focus:border-red-600" : ""
                }`}
                required
                onChange={handleChange}
              />
              {errors?.password && (
                <span className="text-red-600">{errors?.password}</span>
              )}
            </div>
            <div className="text-right mt-2">
              <Link
                to="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Olvidaste tu contraseña?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Inicia Sesión
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <GoogleAuth
            buttonText="Inicia Sesión con Google"
            dispatchFunction="login"
          />
          <p className="mt-8">
            Aún no tienes cuenta?{" "}
            <Link
              to="/signin"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Crea tu cuenta aquí
            </Link>
          </p>
        </div>
      </div>
    </section>

    // <div
    //   className={`border border-slate-600 rounded-lg text-slate-500 w-11/12 mx-auto lg:w-1/3`}
    // >
    //   <div
    //     className={`bg-[#007ea7] text-white flex justify-around items-center`}
    //   >
    //     <h1 className={`text-xl`}>Náutica SerCyn</h1>
    //     <img
    //       className={`w-1/4 h-auto my-2`}
    //       src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
    //       alt="sercyn_logo"
    //     />
    //   </div>
    //   <div className={`tittle_containe my-5`}>
    //     <h1 className={`text-center text-2xl`}>Inicia Sesión</h1>
    //   </div>
    //   <form onSubmit={handleSubmit}>
    //     <div className={`flex flex-col items-center`}>
    //       <label htmlFor="email" className={`text-lg`}>
    //         Correo Electronico
    //       </label>
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         onChange={handleChange}
    //         className={`rounded-lg border w-60 h-8 focus:border-2 focus:border-blue-500`}
    //       />
    //       <label htmlFor="password">Contraseña</label>
    //       <input
    //         className={`rounded-lg border w-60 h-8 mb-3 focus:border-blue-500`}
    //         type="password"
    //         name="password"
    //         id="password"
    //         onChange={handleChange}
    //       />
    //       <Link to="#">
    //         <span className={`text-sm underline`}>
    //           Olvidaste tu contraseña?
    //         </span>
    //       </Link>
    //     </div>
    //     <div className={`flex justify-center my-5`}>
    //       <button
    //         className={`w-40 h-8 border border-slate-700 focus:bg-slate-600 focus:text-white rounded-lg`}
    //       >
    //         Iniciar Sesión
    //       </button>
    //     </div>
    //   </form>
    //   <div className={`flex justify-around mb-4`}>
    //     <span className={`text-lg`}>Aún no tienes cuenta?</span>
    //     <Link to="/signin">
    //       <p className={`text-lg text-blue-400 underline`}>Regístrate</p>
    //     </Link>
    //   </div>
    // </div>
  );
}

export default Login;
