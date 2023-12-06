import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ResetPasswordLink({ open, close, style }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);

  const handleChange = (e) => {
    setEmail({ email: e.target.value });
  };
  const handleSendMail = async (e) => {
    e.preventDefault();
    try {
      await dispatch(resetPassword(email));
      Swal.fire({
        title: "¡Correo enviado!",
        text: "Por favor revisa tu bandeja de entrada, no olvides revisar tu bandeja de spam",
        icon: "success",
        confirmButtonText: "Continuar",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/login");
        }
      });
    } catch (error) {
      console.log("error from resetPaswordLink", error);
      Swal.fire({
        title: "Error",
        text: "El correo ingresado no existe en el sistema, verificalo e intentalo de nuevo",
        icon: "error",
        showCloseButton: true,
        cancelButtonText: "Intentar de nuevo",
      });
    }
  };
  return (
    <div>
      <section className="bg-gray-50 Dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 Dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
              alt="logo"
            />
            Náutica SerCyn
          </a>
          <div className="w-full p-6 bg-white rounded-lg shadow Dark:border md:mt-0 sm:max-w-md Dark:bg-gray-800 Dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl Dark:text-white">
              Recuperar Contraseña
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSendMail}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 Dark:text-white"
                >
                  Por favor ingresa tu correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 Dark:bg-gray-700 Dark:border-gray-600 Dark:placeholder-gray-400 Dark:text-white Dark:focus:ring-blue-500 Dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
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
    </div>
  );
}

export default ResetPasswordLink;
