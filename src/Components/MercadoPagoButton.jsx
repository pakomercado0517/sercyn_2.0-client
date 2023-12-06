import { useState, useEffect } from "react";
import useScript from "../Hooks/useScript";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
const { VITE_APP_MERCADO_PAGO_PUBLIC_KEY } = import.meta.env;

function MercadoPagoButton({ mp_id, amount, buttonHeight }) {
  //mercado pago settings...
  initMercadoPago(VITE_APP_MERCADO_PAGO_PUBLIC_KEY);

  const initialization = {
    amount,
    preferenceId: mp_id,
    redirectMode: "self",
  };

  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
    visual: {
      buttonHeight: buttonHeight,
    },
  };
  return (
    <Wallet
      id={mp_id}
      initialization={initialization}
      customization={customization}
    />
  );
}

export default MercadoPagoButton;
