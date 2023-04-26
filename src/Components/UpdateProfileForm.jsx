import React, { useState } from "react";
import useValidate from "../Hooks/useValidate";
import states from "./states";
import { updateClientData } from "../redux/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function UpdateProfileForm({ profile }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, updateFormData] = useState({
    first_name: profile.first_name,
    last_name: profile.last_name,
    email: profile.email,
    phone_number: profile.phone_number,
    password: profile.password,
    city: profile.city,
    state: profile.state,
    photo: profile.photo,
    repeatPassword: "",
  });

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(updateClientData(profile.id, formData));
      Swal.fire({
        title: "Perfil actualizado",
        text: "Tu perfil ha sido actualizado",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/client_profile");
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `Error al actualizar el perfil: ${error}`,
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  const errors = useValidate({ formData });
  console.log("formData", formData);
  return (
    <form className="w-full max-w-lg text-[#1da2d8]" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nombre
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            defaultValue={profile.first_name}
            onChange={handleChange}
            name="first_name"
          />
          {errors?.first_name && (
            <p className="text-red-500 text-xs italic">{errors?.first_name}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Apellido
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            defaultValue={profile.last_name}
            onChange={handleChange}
            name="last_name"
          />
          {errors?.last_name && (
            <p className="text-red-500 text-xs italic">{errors?.last_name}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            defaultValue={profile.email}
            onChange={handleChange}
            name="email"
          />
          {errors?.email && (
            <p className="text-red-500 text-xs italic">{errors?.email}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            Ciudad
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            defaultValue={profile.city}
            onChange={handleChange}
            name="city"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Estado
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={handleChange}
              name="state"
            >
              {states.map((state) => {
                return (
                  <option
                    className="text-[#1da2d8]"
                    key={state.clave}
                    value={state.clave}
                  >
                    {state.nombre}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-phone_number"
          >
            Número de Teléfono
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="number"
            defaultValue={profile.phone_number}
            onChange={handleChange}
            name="phone_number"
          />
          {errors?.phone_number && (
            <p className="text-red-500 text-xs italic">
              {errors?.phone_number}
            </p>
          )}
        </div>
      </div>
      <div className="flex mt-8 justify-center">
        <button
          className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Editar Perfil
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
