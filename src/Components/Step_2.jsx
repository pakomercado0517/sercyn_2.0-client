import React from "react";

function Step_2({ currentStep, handleChange }) {
  return (
    currentStep === 2 && (
      <div className={`flex justifiy-center content-center`}>
        <div className={`mb-12 mt-3`}>
          <h3 className={`text-lg text-slate-600 text-center mb-5 underline`}>
            Elige la fecha que quieres reservar
          </h3>
          <input type="date" name="date" id="date" onChange={handleChange} />
        </div>
      </div>
    )
  );
}

export default Step_2;
