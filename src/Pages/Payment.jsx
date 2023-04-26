import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  newTransaction,
  removePaymentData,
  removePaymentCollection,
} from "../redux/actions";
import MercadoPagoButton from "../Components/MercadoPagoButton";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BsCreditCard } from "react-icons/bs";

function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paymentData = useSelector((state) => state.paymentData);
  const serviceOrder = useSelector((state) => state.serviceOrder);

  useEffect(() => {
    console.log("paymentData", paymentData);
    console.log("serviceOrder", serviceOrder);
    dispatch(newTransaction(serviceOrder, paymentData.body?.id));
  }, []);

  const handleRemove = async (e) => {
    e.preventDefault();
    // dispatch(removePaymentCollection(paymentData.body?.id));
    dispatch(removePaymentData());
    dispatch(removePaymentCollection(paymentData.body.id));
    Swal.fire({
      title: "Reservación cancelada",
      text: "La reservación se ha cancelado",
      type: "warning",
      confirmButtonText: "Continuar",
    }).then(async (res) => {
      if (res.isConfirmed) {
        await navigate("/");
      }
    });
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="bg-[#1da2d8] text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <BsCreditCard className="text-3xl" />
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Serás direccionado a la página de Mercado Pago para seguir con el
              proceso, después, seras redireccionado de nuevo a SerCyn Web.
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="w-full relative left-20">
              {paymentData.body?.id ? (
                <MercadoPagoButton
                  buttonText="Proceder al Pago"
                  mp_id={`${paymentData.body?.id}`}
                />
              ) : (
                <button
                  disabled
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              )}
            </div>
            <div className="w-full">
              <button
                onClick={handleRemove}
                className="flex justify-center items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300  w-48 h-9 max-w-xs mx-auto text-white rounded-md px-3 py-3 font-semibold"
              >
                Cancelar reservación
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
