import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import BackPageArrow from "../Components/BackPageArrow";

function BoatDetails() {
  const boatById = useSelector((state) => state.boatById);
  const rateValue = boatById ? boatById.Ratings[0]?.qualification : [];

  return (
    <div className={`mt-6`}>
      <div
        className={` text-slate-500 h-[5vh] my-4 flex flex-row justify-center`}
      >
        <div className={`absolute left-2`}>
          <BackPageArrow color="000000" />
        </div>
        <div>
          <img
            className={`w-auto h-8 absolute right-2`}
            src={boatById.Company?.logo}
            alt={boatById.Company?.name}
          />
        </div>
        <h1 className={`text-center text-slate-500 relative right-2`}>
          Embarcación "{boatById.name}"
        </h1>
      </div>
      <div className={`flex flex-col justify-center items-center`}>
        <img
          className={`w-11/12 rounded-lg`}
          src={boatById.photo}
          alt={boatById.name}
        />
        <ReactStars size={30} value={rateValue} />
      </div>
      <div className={` w-full mt-4`}>
        <h3 className={`text-center text-slate-500`}>Destinos disponibles</h3>
        <div className={`my-5`}>
          {boatById.Prices?.map((el) => {
            return (
              <div
                className={` mx-auto my-3 text-lg w-[80vw] h-[30vh] bg-white opacity-75 flex flex-col justify-around items-center text-slate-500 border border-slate-400 rounded-2xl shadow-lg shadow-slate-300`}
                key={el.id}
              >
                <p
                  className={`underline`}
                  key={el.id}
                >{`${el.Destination.name}`}</p>
                <span>{`Desde: $${el.price}`}</span>
              </div>
            );
          })}
          <div className={`flex justify-center`}>
            <Link to="/form/boat">
              <div
                className={`w-32 h-10 border border-white bg-[#007ea7] rounded-md`}
              >
                <p className={`text-white mt-1 text-center`}>Reservar</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoatDetails;
