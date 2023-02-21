import React, { useEffect } from "react";
import useScript from "../Hooks/useScript";
const { REACT_APP_MERCADO_PAGO_PUBLIC_KEY } = process.env;

function MercadoPagoButton({ handleClick, buttonText, mp_id }) {
  var mp;
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
      if (MercadoPago) {
        mp = new MercadoPago(REACT_APP_MERCADO_PAGO_PUBLIC_KEY, {
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
        theme: {
          elementsColor: "#007ea7",
        },
      });
    };
    createCheckoutButton();
  }, [MercadoPago, mp, mp_id]);

  console.log(MercadoPago ? true : false);
  console.log("mp", mp);
  console.log("MercadoPago", MercadoPago);
  return <div className={`mp_button${mp_id}`} onClick={handleClick}></div>;
}

export default MercadoPagoButton;
