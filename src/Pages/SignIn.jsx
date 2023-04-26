import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newClient, clientGoogleSignup } from "../redux/actions";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleAuth from "../Components/GoogleAuth";
import useValidate from "../Hooks/useValidate";
import CreateClient from "../Components/CreateClient";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [googleUser, setGoogleUser] = useState({});
  const [formData, updateFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: 0,
    password: "",
    repeatPassword: "",
  });
  const errors = useValidate({ formData });

  const handleChange = async (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSubmit = () => {
    setGoogleUser({
      first_name: userName[0],
      last_name: userName[1],
      photo: user.photoURL,
      email: user.email,
      phone_number: user.phoneNumber,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = Object.keys(errors);
    try {
      if (!object.length) {
        await dispatch(newClient(formData));
        Swal.fire({
          title: "Felicidades!",
          text: "Usuario creado con éxito!!. Ahora ya puedes iniciar sesión",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      } else {
        Swal.fire({
          title: "Ooops",
          text: "Hay un problema con la información, revisalo e intentalo de nuevo.",
          icon: "warning",
          cancelButtonText: "Cerrar",
        });
      }
    } catch (err) {
      console.log(err.response);
      Swal.fire({
        title: "Ooops",
        text: "Hay un problema con la información, revisalo e intentalo de nuevo.",
        icon: "warning",
        confirmButtonText: "Cerrar",
      });
    }
  };

  return (
    //second version
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-1/3 md:w-1/3 xl:w-1/3 h-screen">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Funderwater-island-sea-nature-wallpaper-preview.jpg?alt=media&token=65693162-96f1-4bec-b2fc-fb46addbcf9b"
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
            Crear Usuario
          </h1>
          <CreateClient
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <hr className="my-6 border-gray-300 w-full" />
          <GoogleAuth
            buttonText="Crea tu cuenta con Google"
            dispatchFunction="signup"
          />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
