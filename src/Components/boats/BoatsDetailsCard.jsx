function BoatsDetailsCard({ handleSubmit, el, order, handleSelect }) {
  return (
    <div
      className={`px-6 py-4 border border-gray-200 shadow-md transition-colors duration-200 transform rounded-lg hover:bg-gray-200 Dark:hover:bg-gray-700 ${
        el.Destination.name === order.destination ? "bg-gray-200" : ""
      }`}
      onClick={() => handleSelect(el.Destination.name, el.price, el.id)}
    >
      <p className="text-lg font-medium text-[#064273] Dark:text-gray-100">
        {el.Destination.name}
      </p>
      <h4 className="mt-2 text-4xl font-semibold text-[#064273] Dark:text-gray-100">
        {`$ ${el.price}`}{" "}
        <span className="text-base font-normal text-[#1da2d8] Dark:text-gray-400">
          / Servicio
        </span>
      </h4>
      <p className="mt-4 text-[#1da2d8] Dark:text-gray-300">
        A consideración de las condiciones climatológicas para poder reservar
        con anticipación.
      </p>
      <div className="mt-8 space-y-8">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mx-4 text-[#064273] Dark:text-gray-300">
            Acceso al Area Natural Protegida.
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mx-4 text-[#064273] Dark:text-gray-300">
            Brazaletes para el acceso.
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mx-4 text-[#064273] Dark:text-gray-300">
            Seguro de responsabilidad civil
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mx-4 text-[#064273] Dark:text-gray-300">
            Equipo de seguridad
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mx-4 text-[#064273] Dark:text-gray-300">
            Cortesías (Hielo, aguas y refrescos).
          </span>
        </div>
      </div>
      <button
        className={`w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
          el.Destination.name !== order.destination ? "hidden" : ""
        }`}
        onClick={handleSubmit}
      >
        Elegir este Destino
      </button>
    </div>
  );
}

export default BoatsDetailsCard;
