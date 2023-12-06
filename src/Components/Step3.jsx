import React from "react";

function Step_3({ currentStep, handleSetPersons, boat, setPassengers }) {
  return (
    currentStep === 3 && (
      <div>
        <div>
          <h2 className={`text-lg text-center text-slate-500`}>
            Indicanos cuantas personas disfrutaran del viaje...
          </h2>
        </div>
        <div className={`my-20`}>
          <select
            className={` w-52 border border-slate-600 rounded-md mt-3`}
            name="capacity"
            id="capacity"
            onChange={handleSetPersons}
          >
            <option value="0">0</option>
            {setPassengers(boat.capacity)}
          </select>
        </div>
      </div>
    )
  );
}

export default Step_3;
