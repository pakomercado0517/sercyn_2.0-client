import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { updatePaymentData, updateTransaction } from "../redux/actions";

function PaymentResponse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.transaction);
  const [newDataTransaction, setNewDataTransaction] = useState({
    ...transaction,
  });
  const paymentData = useSelector((state) => state.paymentData);
  const serviceOrder = useSelector((state) => state.serviceOrder);
  const [collection, setCollection] = useState();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const newCollection = Object.fromEntries([...searchParams]);
    setCollection(newCollection);
    setNewDataTransaction({
      ...newDataTransaction,
      status: newCollection.status,
    });
  }, [searchParams]);

  const getResponse = async (e) => {
    e.preventDefault();
    await dispatch(updatePaymentData(collection));
    await dispatch(updateTransaction(newDataTransaction));
    await navigate("/");
    await navigate("/client_profile");
  };

  console.table("collection", collection);
  console.log("paymentData", paymentData);
  console.log("serviceOrder", serviceOrder);
  console.log("newDataTransaction", newDataTransaction);

  return (
    <div>
      {collection?.status === "approved" ? (
        <div className="w-10/12 mt-10 mx-auto rounded-md h-11/25 border border-slate-600 text-center text-slate-500 my-6 lg:w-[50vw]">
          <img
            className="mx-auto my-4"
            src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"
          />
          <h1 className="text-xl">Tu pago se realizó con éxito!</h1>
          <p className={`text-lg text-slate-600`}>
            Puedes revisar la información de tu compra en{" "}
            <strong>"MI PERFIL"</strong>
          </p>
          <button
            className="w-36 h-10 my-6 rounded-md bg-[#007ea7] text-white"
            onClick={getResponse}
          >
            Ir a "Mi perifl"
          </button>
        </div>
      ) : (
        <div className="w-10/12 mx-auto rounded-md h-11/25 border border-slate-600 text-center text-slate-500 my-6">
          <img
            className="mx-auto my-3"
            src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/undefined/external-warning-ecommerce-basic-1-sbts2018-outline-color-sbts2018.png"
          />
          <h1 className="text-xl">Hubo un problema con tu pago...</h1>
          <h2 className="text-md text-[#007ea7]">
            Puedes checar los datos del servicio e intentar pagar de nuevo
            desde: <strong className="font-bold underline">"Mi perfil"</strong>{" "}
          </h2>
          <button
            className="w-36 h-10 my-6 rounded-md bg-[#007ea7] text-white"
            onClick={getResponse}
          >
            Ir a Inicio
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentResponse;
