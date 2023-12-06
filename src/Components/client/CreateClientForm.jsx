import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newClient } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import useValidate from "../../Hooks/useValidate";
import Swal from "sweetalert2";

function CreateClientForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, updateFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: 0,
    password: "",
    repeatPassword: "",
    photo: "",
  });
  const errors = useValidate({ formData });

  const handleChange = async (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
      photo: `https://ui-avatars.com/api/?name=${formData.first_name}+${formData.last_name}&background=1da2d8&color=fff&size=360`,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = Object.keys(errors);
    try {
      if (!object.length) {
        await dispatch(newClient(formData));
        Swal.fire({
          title: "Muy bien, falta poco!",
          text: "Se ha enviado un mail de confirmación a tu cuenta. Por favor ingresa a tu correo para verificarlo y poder Iniciar Sesión.",
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
    <section>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Nombre(s)</label>
          <input
            type="text"
            name="first_name"
            placeholder="Ingresa tu nombre"
            className={`${
              errors?.first_name && "border-red-500"
            } w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`}
            autoFocus
            required
            onChange={handleChange}
          />
          {errors?.first_name && (
            <span className="text-red-500">{errors.first_name}</span>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Apellido</label>
          <input
            type="text"
            name="last_name"
            placeholder="Apellido"
            className={`${
              errors?.last_name && "border-red-500"
            } w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`}
            autoFocus
            required
            onChange={handleChange}
          />
          {errors?.last_name && (
            <span className="text-red-500">{errors?.last_name}</span>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            className={`${
              errors?.email && "border-red-500"
            } w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`}
            autoFocus
            required
            onChange={handleChange}
          />
          {errors?.email && (
            <span className="text-red-500">{errors?.email}</span>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            className={` ${
              errors?.password && "border-red-500"
            } w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`}
            autoFocus
            required
            onChange={handleChange}
          />
          {errors?.password && (
            <span className="text-red-500">{errors?.password}</span>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Repetir Contraseña</label>
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repite la contraseña"
            className={` ${
              errors?.repeatPassword && "border-red-500"
            } w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`}
            autoFocus
            required
            onChange={handleChange}
          />
          {errors?.repeatPassword && (
            <span className="text-red-500">{errors?.repeatPassword}</span>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Número de teléfono</label>
          <input
            type="number"
            name="phone_number"
            placeholder="Teléfono"
            className={` ${
              errors?.phone_number && "border-red-500"
            } w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`}
            autoFocus
            required
            onChange={handleChange}
          />
          {errors?.phone_number && (
            <span className="text-red-500">{errors?.phone_number}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
        >
          Crear Usuario
        </button>
      </form>
    </section>
  );
}

export default CreateClientForm;
