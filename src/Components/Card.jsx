import React from "react";
import ReactStars from "react-rating-stars-component";
import s from "./Styles/Card.module.css";

function Card({
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
      <div
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
      </div>
    </>
  );
}

export default Card;
