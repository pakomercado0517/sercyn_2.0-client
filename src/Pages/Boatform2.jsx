import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { service_order, getPaymentData } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Boatform2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const serviceOrder = useSelector((state) => state.serviceOrder);
  const boatById = useSelector((state) => state.boatById);
  const clientLogged = useSelector((state) => state.clientLogged);
  const { token } = clientLogged;
  const [order, setOrder] = useState({
    priceId: serviceOrder.priceId,
    clientId: clientLogged.data?.id,
    passenger: "",
    status: "pending to pay",
    price: serviceOrder.price,
    unit_price: serviceOrder.price,
    date: "",
    destination: serviceOrder.destination,
    title: serviceOrder.destination,
    quantity: 1,
    boat: serviceOrder.boat,
  });
  let passengers = [];

  const handleChange = (e) => {
    e.preventDefault();
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const setHandlePassengers = (e) => {
    e.preventDefault();
    setOrder({ ...order, passenger: parseInt(e.target.value) });
  };

  const setPassengers = (el) => {
    for (let i = 1; i <= el; i++) {
      passengers.push(
        <option key={i} className={`w-5 border rounded-md`} value={i}>
          {i}
        </option>
      );
    }
    return passengers;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token) {
      await dispatch(service_order(order));
      await dispatch(getPaymentData(order, token));
      await navigate("/payment");
    } else {
      Swal.fire({
        title: "Atención!",
        text: "Inicia Sesión para continuar.",
        type: "warning",
        confirmButtonText: "Iniciar Sesión",
      }).then(async (res) => {
        if (res.isConfirmed) {
          await navigate("/login");
        }
      });
    }
  };
  console.log("order", order);

  return (
    <div className="w-full p-10 justify-center">
      {/* <h1 className='text-2xl text-center text-["064273]'>
        Embarcación: {serviceOrder.boat}
      </h1>
      <h2 className="text-center text-lg text-[#1da2d8]">
        Destino: {serviceOrder.detination}
        </h2>
        <h2 className="text-center text-lg text-[#1da2d8]">
        Costo del servicio: {serviceOrder.price}
      </h2> */}
      <form>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            value={order.destination}
            name="destination"
            readOnly
            id="destination"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none Dark:text-white Dark:border-gray-600 Dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="destination"
            className="peer-focus:font-medium absolute text-sm text-gray-500 Dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:Dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Destino
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="boat"
            id="boat"
            value={order.boat}
            readOnly
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none Dark:text-white Dark:border-gray-600 Dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="boat"
            className="peer-focus:font-medium absolute text-sm text-gray-500 Dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:Dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Embarcación
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="price"
            id="boat"
            value={`$ ${order.price}`}
            readOnly
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none Dark:text-white Dark:border-gray-600 Dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 Dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:Dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Costo del servicio
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="date"
              id="date"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none Dark:text-white Dark:border-gray-600 Dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 Dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:Dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fecha
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none Dark:text-white Dark:border-gray-600 Dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={setHandlePassengers}
            >
              <option value="">Seleccione</option>
              {setPassengers(boatById.capacity)}
            </select>
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 Dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:Dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              N° de Pasajeros
            </label>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center Dark:bg-blue-600 Dark:hover:bg-blue-700 Dark:focus:ring-blue-800"
        >
          Continuar
        </button>
      </form>
    </div>
  );
}

export default Boatform2;
