import React, { useEffect } from "react";
import useScript from "../Hooks/useScript";
const { VITE_APP_MERCADO_PAGO_PUBLIC_KEY } = import.meta.env;

function MercadoPagoButton({ buttonText, mp_id }) {
  //mercado pago settings...

  const { MercadoPago } = useScript(
    "https://sdk.mercadopago.com/js/v2",
    "MercadoPago"
  );

  // const mp = new MercadoPago(REACT_APP_MERCADO_PAGO_PUBLIC_KEY, {
  //   locale: "es-MX",
  // });

  useEffect(() => {
    const createCheckoutButton = async () => {
      let mp;
      if (MercadoPago) {
        mp = new MercadoPago(VITE_APP_MERCADO_PAGO_PUBLIC_KEY, {
          locale: "es-MX",
        });
      }
      await mp?.checkout({
        preference: {
          id: mp_id,
        },
        render: {
          container: `.mp_button${mp_id}`,
          label: buttonText,
        },
      });
    };
    createCheckoutButton();
  }, [MercadoPago, mp_id, buttonText]);

  // console.log(MercadoPago ? true : false);
  // console.log("MercadoPago", MercadoPago);
  return <div className={`mp_button${mp_id} `}></div>;
}

export default MercadoPagoButton;
