import React from "react";

function Step_1({
  destination,
  selected,
  handleSelectClick,
  handlePayment,
  currentStep,
}) {
  return (
    currentStep === 1 && (
      <div className={`w-11/12 flex flex-col justify-center items-center`}>
        <img
          className={`w-32 h-auto p-2`}
          src={destination.Company.logo}
          alt={destination.Company.name}
        />
        <div>
          <h1 className={`mt-3 text-center text-lg text-slate-800`}>
            Embarcación "{destination.name}".
          </h1>
        </div>
        <div>
          <h3 className={`mt-3 underline text-lg text-center text-slate-500`}>
            Selecciona un destino.
          </h3>
        </div>
        <div>
          <div
            className={`w-screen flex flex-col items-center justify-center md:flex-row md:container`}
          >
            {destination.Prices.map((el) => {
              return (
                <div
                  className={`w-11/12 h-[12vh] border border-slate-400 text-center my-3 rounded-lg flex flex-col justify-evenly items-center ${
                    selected.priceId === el.id ? "bg-[#007ea7] text-white" : ""
                  } md:w-[19vw] md:mx-2 lg:w-[15vw]`}
                  key={el.id}
                  onClick={() => {
                    handleSelectClick(el.id, el.price);
                    handlePayment(el.Destination.name, el.price);
                  }}
                >
                  <h4 className={`text-lg`}>{el.Destination.name}</h4>
                  <p>{}</p>
                  <p>
                    Precio: <span> $ {el.price} </span>{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}

export default Step_1;
