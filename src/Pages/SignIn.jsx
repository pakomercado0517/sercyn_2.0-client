import React, { useState } from "react";
import { useDispatch } from "react-redux";
import BackPageArrow from "../Components/BackPageArrow";
import { newClient } from "../redux/actions";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export function validate(formData) {
  let error = {};

  //first name validation
  if (!formData.first_name) {
    error.first_name = "Por favor ingresa un nombre";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.first_name)) {
    error.first_name = "El nombre solo pude contener letras y espacios";
  }

  //last name  validation
  if (!formData.last_name) {
    error.last_name = "Por favor, ingresa un apellido";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.last_name)) {
    error.last_name = "El apellido solo puede contener letras y espacios.";
  }

  //phone number validation

  if (!/^[a-zA-Z0-9]{0,10}$/.test(formData.phone_number)) {
    error.phone_number = "El teléfono debe de ser de 10 digitos";
  }

  // email validation
  if (!formData.email) {
    error.email = "Por favor, ingresa tu correo electronico";
  } else if (
    !/^[a-zA-Z0-9]{0,10}$/.test(formData.phone_number)
  ) {
    error.email =
      "El email solo puede contener letras, números, puntos, guines, y guión bajo";
  }

  //validacion Password
  if (!formData.password) {
    error.password = "Crea una contraseña";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(
      formData.password
    )
  ) {
    error.password =
      "El password debe tener como mínimo 8 caracteres, al menos una mayúscula y un número";
  }

  //repeat password valifation
  if (formData.password !== formData.repeatPassword) {
    error.repeatPassword = "Las contraseñas no coinciden";
  }

  return error;
}

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    photo: "",
    phone_number: 0,
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...formData,
        [e.target.name]: e.target.value,
      })
    );
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
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        title: "Ooops",
        text: "Hay un problema con la información, revisalo e intentalo de nuevo.",
        icon: "warning",
        confirmButtonText: "Cerrar",
      });
    }
  };

  console.log("errors", errors);

  return (
    <div
      className={`border border-slate-600 rounded-lg text-slate-500 w-11/12 mx-auto lg:w-[50vw]`}
    >
      <div className={`absolute left-6`}>
        <BackPageArrow color={`ffffff`} />
      </div>
      <div
        className={`bg-[#007ea7] text-white flex justify-around items-center`}
      >
        <h1 className={`text-xl`}>Náutica SerCyn</h1>
        <img
          className={`w-1/4 h-auto my-2 lg:w-28`}
          src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
          alt="sercyn_logo"
        />
      </div>
      <div className={`tittle_containe my-5`}>
        <h1 className={`text-center text-2xl underline`}>Registro Clientes</h1>
      </div>

      {/*----------------- Formulario ---------------------- */}

      <form className={`p-3`} onSubmit={handleSubmit}>
        <div className={`flex flex-col lg:w-[30vw] lg:mx-auto`}>
          <label htmlFor="first_name">Nombre</label>
          {errors.first_name && (
            <span className={`text-red-600`}>{errors.first_name}</span>
          )}
          <input
            type="text"
            name="first_name"
            onChange={handleChange}
            className={`${
              errors.first_name && "border border-red-600"
            } rounded-lg border border-slate-500`}
          />
          <label htmlFor="last_name">Apellido</label>
          {errors.last_name && (
            <span className={`text-red-600`}>{errors.last_name}</span>
          )}
          <input
            type="text"
            name="last_name"
            onChange={handleChange}
            className={`${
              errors.last_name && "border border-red-600"
            } rounded-lg border border-slate-500`}
          />
          <label htmlFor="phone_number">Número de telefono</label>
          {errors.phone_number && (
            <span className={"text-red-600"}>{errors.phone_number}</span>
          )}
          <input
            type="number"
            name="phone_number"
            onChange={handleChange}
            className={`rounded-lg border border-slate-500`}
          />
          <label htmlFor="photo">Foto de Perfil</label>
          <input
            type="text"
            name="photo"
            onChange={handleChange}
            className={`rounded-lg border border-slate-500`}
          />
          <label htmlFor="email">Email</label>
          {errors.email && (
            <span className={`text-red-600`}>{errors.email}</span>
          )}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            id="email"
            className={`${
              errors.email && "border border-red-600"
            } rounded border border-slate-500`}
          />
          <label htmlFor="password">Password</label>
          {errors.password && (
            <span className={`text-red-600`}>{errors.password}</span>
          )}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            id="pasword"
            className={`${
              errors.password && "border border-red-600"
            } rounded border border-slate-500`}
          />
          <label htmlFor="confirm_password">Confirmar contraseña</label>
          {errors.repeatPassword && (
            <span className={`text-red-600`}>{errors.repeatPassword}</span>
          )}
          <input
            type="password"
            name="repeatPassword"
            onChange={handleChange}
            id="password"
            className={`${
              errors.repeatPassword && "border border-red-600"
            } rounded border border-slate-500`}
          />
        </div>
        <div className={`flex justify-center mt-8 mb-4`}>
          <button
            className={`w-40 h-8 border border-slate-500 bg-[#007ea7] rounded-lg text-white`}
          >
            Registrarse
          </button>
        </div>
      </form>
      <div className={`flex flex-row justify-center`}>
        <p className={`text-lg mx-3`}>¿Ya tienes cuenta?</p>
        <span className={`text-lg underline text-blue-400`}>
          <Link to="/login">Inicia Sesión</Link>
        </span>
      </div>
    </div>
  );
}

export default SignIn;
