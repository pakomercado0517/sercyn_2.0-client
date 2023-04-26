import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  newTransaction,
  getPaymentData,
  navigationUrl,
} from "../redux/actions";
import Modal from "react-modal";
import Swal from "sweetalert2";
import MercadoPagoButton from "../Components/MercadoPagoButton";
import { useNavigate } from "react-router-dom";
import Step1 from "../Components/Step1";
import Step2 from "../Components/Step2";
import Step3 from "../Components/Step3";

function BoatForm() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const dispatch = useDispatch();
  const boatById = useSelector((state) => state.boatById);
  const clientLogged = useSelector((state) => state.clientLogged);
  const { token } = clientLogged;
  const paymentData = useSelector((state) => state.paymentData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPaymentData("", ""));
  }, [clientLogged, dispatch]);

  const [items, setItems] = useState({
    title: "",
    quantity: 0,
    unit_price: 0,
  });

  const [selected, setSelected] = useState({
    priceId: 0,
    clientId: clientLogged.data?.id,
    passenger: 0,
    status: "",
    preference_id: "",
    price: 0,
    date: "",
    currentStep: 1,
  });

  let passengers = [];

  const customStyles = {
    content: {
      top: "2%",
      left: "18%",
      right: "18%",
      bottom: "10%",
      transform: "translate(3%, 3%)",
      borderRadius: "14px",
    },
  };

  const next = () => {
    let currentStep = selected.currentStep;
    currentStep = currentStep >= 5 ? 6 : currentStep + 1;
    setSelected({
      ...selected,
      currentStep: currentStep,
    });
  };

  const prev = () => {
    let currentStep = selected.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setSelected({
      ...selected,
      currentStep: currentStep,
    });
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

  const handleSelectClick = (id, price) => {
    id
      ? setSelected({
          ...selected,
          priceId: id,
          status: "pending to pay",
          price,
        })
      : setSelected({ priceId: 0, select: false });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSelected({
      ...selected,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (title, price) => {
    setItems({
      title,
      quantity: 1,
      unit_price: price,
    });
  };

  const handleSetPersons = (e) => {
    setSelected({ ...selected, passenger: parseInt(e.target.value) });
  };

  const handleClick = () => {
    if (token.length > 0) {
      dispatch(newTransaction(selected, paymentData.body.id));
    }
  };

  const handlePaymentSubmit = async () => {
    dispatch(getPaymentData(items, token));
    await navigate("/payment");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (token?.length > 0) {
        dispatch(newTransaction(selected, paymentData.body.id));
        // setSelected({ ...selected, preference_id: paymentData.body?.id });
        setModalIsOpen(false);
      } else {
        Swal.fire({
          icon: "warning",
          title: "Inicia Sesión",
          text: "Para continuar debes registrarte o iniciar sesión",
          confirmButtonText: "Inicia Sesión",
        }).then(() => {
          dispatch(navigationUrl("/form/boat"));
          navigate("/login");
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Revisa la información seleccionada e intenta de nuevo... ${error}`,
        confirmButtonText: "Cerrar",
      });
    }
  };

  const closeModal = () => setModalIsOpen(false);
  const openModal = () => {
    dispatch(getPaymentData("", ""));
    setModalIsOpen(true);
  };
  // const closeWelcomeModal = () => setWelcomeModalIsOpen(false)
  console.log("paymentData", paymentData);
  console.log("selected", selected);
  console.log("boatById", boatById);
  console.log("items", items);

  return (
    <>
      <form
        className={` text-slate-500 flex flex-col items-center justify-center`}
      >
        {paymentData.length !== 0 ? (
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <div
                className={`border w-6 h-6 rounded-lg flex justify-center float-right bg-red-600 text-white`}
              >
                <button onClick={closeModal}>X</button>
              </div>
              <Step1
                currentStep={selected.currentStep}
                destination={boatById}
                selected={selected}
                handleChange={handleChange}
                handleSelectClick={handleSelectClick}
                handlePayment={handlePayment}
              />
              <Step2
                currentStep={selected.currentStep}
                handleChange={handleChange}
              />
              <Step3
                currentStep={selected.currentStep}
                boat={boatById}
                handleSetPersons={handleSetPersons}
                setPassengers={setPassengers}
              />

              {/* next/prev navigation buttons here... */}
              <div className={`mt-5 flex justify-between`}>
                <button
                  className={`px-3 py-1  border border-slate-800 rounded-md bg-[#007ea7] text-white`}
                  onClick={prev}
                >
                  Anterior
                </button>
                {selected.currentStep === 3 ? (
                  <button
                    className={`px-3 py-1  border border-slate-800 rounded-md bg-[#007ea7] text-white`}
                    onClick={handleSubmit}
                  >
                    Terminar
                  </button>
                ) : (
                  <button
                    className={`px-3 py-1  border border-slate-800 rounded-md bg-[#007ea7] text-white`}
                    onClick={next}
                  >
                    Siguiente
                  </button>
                )}
              </div>
            </Modal>
          </div>
        ) : (
          <></>
        )}
      </form>

      {/* Data from service selected before to make the cash pay on MeLi */}

      <div className={`flex justify-around mt-8`}>
        <img
          className={`w-16 h-auto`}
          src={boatById.Company.logo}
          alt={boatById.Company.name}
        />
        <h2 className={`text-md text-slate-500 self-center`}>
          Embarcación: {boatById.name}
        </h2>
      </div>
      <br />
      <br />
      <hr />
      <h1 className={`text-lg underline text-slate-600 text-center my-4`}>
        Datos del servicio a contratar
      </h1>
      <div
        className={`text-slate-500 flex justify-center flex-col items-center text-justify my-12`}
      >
        <ul>
          <li className={`border border-slate-600 rounded-md p-2`}>
            <h2>
              Destino:{" "}
              <span className={`text-lg text-slate-700`}>{items.title}</span>
            </h2>
          </li>
          <li className={`border border-slate-600 rounded-md p-2`}>
            <h2>
              Precio:{" "}
              <span className={`text-lg text-slate-700`}>
                {items.unit_price}
              </span>
            </h2>
          </li>
          <li className={`border border-slate-600 rounded-md p-2`}>
            <h2>
              No. de Pasajeros:{" "}
              <span className={`text-lg text-slate-700`}>
                {selected.passenger}
              </span>
            </h2>
          </li>
          <li className={`border border-slate-600 rounded-md p-2`}>
            <h2>
              Fecha del servicio:{" "}
              <span className={`text-lg text-slate-700`}>
                {selected.date.slice(0, 10).split("-").reverse().join("/")}
              </span>
            </h2>
          </li>
        </ul>
      </div>
      {/* <div className={`flex justify-center`}>
        {paymentData.body.id ? (
          <MercadoPagoButton
            handleClick={handleClick}
            buttonText={`Proceder al Pago`}
            mp_id={paymentData.body.id}
          />
        ) : (
          <></>
        )}
      </div> */}
      {selected.priceId > 0 ? (
        <div className={`mt-8 flex justify-center`}>
          <button
            className={`w-32 h-8 text-white bg-blue-500 p4 rounded-md `}
            onClick={openModal}
          >
            Editar
          </button>
          <p className="hidden">{paymentData.body.id}</p>
          <button
            className="w-32 h-8 text-white bg-blue-500 p4 rounded-md"
            onClick={handlePaymentSubmit}
          >
            Proceder a Pagar
          </button>
        </div>
      ) : (
        <div className={`mt-8 flex justify-center`}>
          <button
            className={`w-32 h-8 text-white bg-blue-500 p4 rounded-md `}
            onClick={openModal}
          >
            Contratar
          </button>
        </div>
      )}
    </>
  );
}

export default BoatForm;
