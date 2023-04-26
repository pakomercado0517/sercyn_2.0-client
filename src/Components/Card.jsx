import React from "react";
import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
// import s from "./Styles/Card.module.css";

function BoatCard({
  id,
  photo,
  name,
  qualification,
  handleClickDetail,
  handleFormClick,
  buttonText,
  showRating,
}) {
  return (
    <>
      {/* New style fot card */}

      <div className="py-6">
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="w-1/3 bg-cover"
            style={{
              backgroundImage: `url(${photo})`,
            }}
          ></div>
          <div className="w-2/3 p-4">
            <h1 className="text-[#064273] font-bold text-2xl">{name}</h1>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              exercitationem fuga id nam quia
            </p>
            {/* Stars here... */}
            <ReactStars size={18} value={qualification} activeColor="#1da2d8" />
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-[#064273] font-bold text-xl">
                <span className="text-xs text-[#064273]">Desde </span>
                $220
              </h1>
              <button
                onClick={() => handleClickDetail(id)}
                className="px-3 py-2 bg-[#f2d2a9] hover:bg-[#e1bf92] text-white text-xs font-bold uppercase rounded"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`w-[70vw] h-[48vh] my-3 border border-slate-400 rounded-2xl bg-white bg-opacity-70 flex flex-col items-center shadow-xl shadow-sky-400 md:w-[30vw] md:h-[42vh] md:mx-1 lg:w-[18vw] lg:h-[55vh]`}
      >
        <div>
          <img
            className={`w-11/12 mx-auto mt-2 h-[28vh] rounded-xl shadow-2xl shadow-slate-400 mb-5`}
            src={`${photo}`}
            alt="boat_img"
          />
        </div>
        <h1 className={`text-center text-xl  text-slate-400 mb-2`}>{name}</h1>
        <div className={`w-full flex justify-center items-center mb-3`}>
          {showRating ? <ReactStars size={25} value={qualification} /> : <></>}
        </div>
        <div onClick={() => handleClickDetail(id)}>
          <h3
            className={`w-32 h-8 border border-slate-400 text-center text-white bg-blue-500 text-lg rounded-lg shadow-md shadow-blue-400`}
          >
            {`${buttonText}`}
          </h3>
        </div>
      </div> */}
    </>
  );
}

export default BoatCard;
