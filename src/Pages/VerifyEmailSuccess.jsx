import { Link } from "react-router-dom";

function VerifyEmailSuccess() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-white border border-white shadow-lg rounded-3xl text-[#1da2d8] max-w-lg flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold py-4 underline">
          Email verificado con Exito!
        </h1>
        <h3 className="text-center text-xl py-5 px-8">
          Todo listo, muchas gracias por registrarte y verificar tu cuenta para
          que tengas una mejor experiencia, ahora ya puedes Iniciar Sesión,
          puedes hacerlo dando click en el botón que verás a continuación.
        </h3>
        <Link to="/login">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
          >
            Iniciar Sesión
          </button>
        </Link>
      </div>
    </div>
  );
}

export default VerifyEmailSuccess;
