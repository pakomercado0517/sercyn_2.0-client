import React from "react";
import MercadoPagoButton from "../Components/MercadoPagoButton";
import s from "./Styles/ServiceCard.module.css";

function ServiceCard({
  boat_name,
  date,
  company_name,
  company_logo,
  destination_name,
  status,
  service_id,
  rate_button,
}) {
  // const showMpButton = () => {
  //   if (!status) {
  //     console.log("se mostrara el boton");
  //     return (
  //       <>
  //         <MercadoPagoButton buttonText={`Pagar`} mp_id={service_id} />
  //       </>
  //     );
  //   } else {
  //     return <></>;
  //   }
  // };
  return (
    <div
      className={`flex flex-col items-center w-11/12 text-lg text-center text-slate-400  p-4 rounded-[20px] ${s.card}`}
    >
      <img
        className={`w-16 h-auto md:w-24 md:h-auto mb-3`}
        src={company_logo}
        alt={company_name}
      />
      <h3 className="text-slate-700 text-xl">Destino:</h3>
      <p>{destination_name}</p>
      <h3 className="text-slate-700 text-xl">Compañia:</h3>
      <p>{company_name}</p>
      <h3 className="text-slate-700 text-xl">Embarcación:</h3>
      <p>{boat_name}</p>
      <h3 className="text-slate-700 text-xl">Fecha:</h3>
      <p>{date}</p>
      <h3 className="text-slate-700 text-xl">Status:</h3>
      <p>
        {status === "approved"
          ? "Servicio Pagado"
          : status === "finished"
          ? "Servicio completado exitosamente"
          : "Pendiente de Pagar"}
      </p>
      {status === "approved" ? (
        <button
          className={`border-2 rounded-lg p-1 bg-green-700 text-white`}
          onClick={rate_button}
        >
          Calificar Servicio
        </button>
      ) : status === " finished" ? (
        <></>
      ) : status === "pending to pay" ||
        status === "rejected" ||
        status === null ? (
        <MercadoPagoButton buttonText={`Pagar`} mp_id={service_id} />
      ) : (
        <></>
      )}
      <p className="hidden">{service_id}</p>
    </div>
  );
}

export default ServiceCard;
