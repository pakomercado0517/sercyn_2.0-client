import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { service_order } from "../redux/actions";
import Swal from "sweetalert2";

function BoatDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boatById = useSelector((state) => state.boatById);
  const [order, setOrder] = useState({
    boat: boatById.name,
  });
  const [selectedItem, setSelectedItem] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(service_order(order));
    Swal.fire({
      title: "Confirmación",
      text: "Estas seguro de escoger este destino?",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then(async (res) => {
      if (res.isConfirmed) {
        await navigate("/form/boat");
      }
    });
  };

  const handleSelect = (destination, price, priceId) => {
    setOrder({
      ...order,
      destination,
      price,
      priceId,
    });
    setSelectedItem(!selectedItem);
  };

  console.log("boatById", boatById);
  console.log("order", order);
  console.log("order.length", order.length);
  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#064273] Dark:text-gray-100">
                {`Embarcación: ${boatById.name}`}
              </h2>
              <div className="mt-4 flex justify-start items-center">
                <img
                  src={boatById.Company.logo}
                  alt={boatById.Company.companyName}
                  className=" w-8 h-auto mr-5"
                />
                <p className=" text-[#1da2d8] Dark:text-gray-400">
                  {`${boatById.Company.companyName}`}
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-2xl text-[#064273] text-center">
            Por favor, selecciona un Destino
          </h1>
          <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boatById.Prices.map((el) => {
              return (
                <div
                  key={el.id}
                  className={`px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 Dark:hover:bg-gray-700 ${
                    el.Destination.name === order.destination
                      ? "bg-gray-200"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(el.Destination.name, el.price, el.id)
                  }
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
                    A consideración de las condiciones climatológicas para poder
                    reservar con anticipación.
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
            })}
          </div>
        </div>
      </section>
    </div>

    // <div className={`mt-6`}>
    //   <div
    //     className={` text-slate-500 h-[5vh] my-4 flex flex-row justify-center`}
    //   >
    //     <div>
    //       <img
    //         className={`w-auto h-8 absolute right-2`}
    //         src={boatById.Company?.logo}
    //         alt={boatById.Company?.name}
    //       />
    //     </div>
    //     <h1 className={`text-center text-slate-500 relative right-2`}>
    //       Embarcación "{boatById.name}"
    //     </h1>
    //   </div>
    //   <div className={`flex flex-col justify-center items-center`}>
    //     <img
    //       className={`max-w-lg rounded-lg`}
    //       src={boatById.photo}
    //       alt={boatById.name}
    //     />
    //     <ReactStars size={30} value={rateValue} />
    //   </div>
    //   <div className={` w-full mt-4`}>
    //     <h3 className={`text-center text-slate-500`}>Destinos disponibles</h3>
    //     <div className={`my-5`}>
    //       {boatById.Prices?.map((el) => {
    //         return (
    //           <div
    //             className={` mx-auto my-3 text-lg w-[80vw] h-[30vh] bg-white opacity-75 flex flex-col justify-around items-center text-slate-500 border border-slate-400 rounded-2xl shadow-lg shadow-slate-300`}
    //             key={el.id}
    //           >
    //             <p
    //               className={`underline`}
    //               key={el.id}
    //             >{`${el.Destination.name}`}</p>
    //             <span>{`Desde: $${el.price}`}</span>
    //           </div>
    //         );
    //       })}
    //       <div className={`flex justify-center`}>
    //         <Link to="/form/boat">
    //           <div
    //             className={`w-32 h-10 border border-white bg-[#007ea7] rounded-md`}
    //           >
    //             <p className={`text-white mt-1 text-center`}>Reservar</p>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default BoatDetails;
