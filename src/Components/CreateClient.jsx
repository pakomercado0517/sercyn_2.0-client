import React from "react";

function CreateClient({ errors, handleChange, handleSubmit }) {
  return (
    <div>
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
    </div>
  );
}

export default CreateClient;
