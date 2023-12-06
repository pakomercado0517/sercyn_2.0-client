import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginClient, navigationUrl } from "../redux/actions";
import Swal from "sweetalert2";
import GoogleAuth from "../Components/GoogleAuth";
import useValidate from "../Hooks/useValidate";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation_url = useSelector((state) => state.navigation_url);
  const clientLogged = useSelector((state) => state.clientLogged);
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

  useEffect(() => {
    if (clientLogged.message === "email unverified") {
      Swal.fire({
        title: "Aviso",
        text: `Se ha enviado un correo a ${formData?.email}. Por favor verifica tu correo para poder iniciar sesión`,
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    } else if (clientLogged === "Unauthorized") {
      Swal.fire({
        title: "Error",
        text: "Tu email o contraseña son incorrectos, verifica tus datos e intentalo de nuevo",
        icon: "error",
        confirmButtonColor: "red",
        confirmButtonText: "Cerrar",
      });
    } else if (clientLogged.message === "Logged") {
      Swal.fire({
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
    } else if (clientLogged.message === "Client not found") {
      Swal.fire({
        title: "Error",
        text: "Usuario no encontrado, verifica tu información o registrate dando click en el botón de Registro",
        icon: "error",
        confirmButtonText: "Registro",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "blue",
        cancelButtonText: "Cerrar",
        cancelButtonColor: "red",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/signin");
        }
      });
    }
  }, [clientLogged, dispatch]);

  const loginSubmit = async (e) => {
    e.preventDefault();
    const object = Object.keys(errors);
    if (object.length <= 3) {
      await dispatch(loginClient(formData));
    }
  };

  return (
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
          <form className="mt-6">
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
                to="/request/resetPassword"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Olvidaste tu contraseña?
              </Link>
            </div>
            <button
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              onClick={loginSubmit}
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
  );
}

export default LoginForm;
