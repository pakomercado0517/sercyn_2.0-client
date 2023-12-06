import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import useValidate from "../Hooks/useValidate";
import Swal from "sweetalert2";

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useParams();
  const [formData, setFormData] = useState({
    email: email,
    password: "",
    repeatPassword: "",
  });
  const errors = useValidate({ formData });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonColor: "#D14D72",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#1da2d8",
        confirmButtonText: "Si, cambiar contraseña!",
      }).then(async (res) => {
        if (res.isConfirmed) {
          await dispatch(updatePassword(formData));
          Swal.fire({
            title: "¡Cambio realizado!",
            icon: "success",
            text: "Tu contraseña ha sido cambiada, ya puedes iniciar sesión.",
            confirmButtonText: "Iniciar Sesión",
            confirmButtonColor: "#1da2d8",
          }).then((res) => {
            if (res.isConfirmed) {
              navigate("/login");
            }
          });
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Hay un problema con la información, revisala e intentalo de nuevo",
        showCloseButton: true,
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#D14D72",
      });
    }
  };

  return (
    <>
      <section className="bg-gray-50 Dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 Dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
              alt="logo"
            />
            Náutica Sercyn
          </a>
          <div className="w-full p-6 bg-white rounded-lg shadow Dark:border md:mt-0 sm:max-w-md Dark:bg-gray-800 Dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl Dark:text-white">
              Cambiar Contraseña
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 Dark:text-white"
                >
                  Tu Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 Dark:bg-gray-700 Dark:border-gray-600 Dark:placeholder-gray-400 Dark:text-white Dark:focus:ring-blue-500 Dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 Dark:text-white"
                >
                  Nueva Contraseña
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 Dark:bg-gray-700 Dark:border-gray-600 Dark:placeholder-gray-400 Dark:text-white Dark:focus:ring-blue-500 Dark:focus:border-blue-500"
                  required=""
                />
                {errors?.password && (
                  <span className="text-red-500 text-xs italic">
                    {errors?.password}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 Dark:text-white"
                >
                  Confirma la Contraseña
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 Dark:bg-gray-700 Dark:border-gray-600 Dark:placeholder-gray-400 Dark:text-white Dark:focus:ring-blue-500 Dark:focus:border-blue-500"
                  required=""
                />
                {errors?.repeatPassword && (
                  <span className="text-red-500 text-xs italic">
                    {errors?.repeatPassword}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#1da2d8] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center Dark:bg-primary-600 Dark:hover:bg-primary-700 Dark:focus:ring-primary-800"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
