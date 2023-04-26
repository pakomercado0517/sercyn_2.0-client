import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { newRating, updateStatusPayment } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function RateForm({
  rate_boat,
  rate_company,
  rate_destination,
  rate_date,
  client_id,
  boat_id,
  serviceId,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rate, setRate] = useState({
    qualification: 0,
    comment: "",
    clientId: client_id,
    preferenceId: serviceId,
  });
  const [newStatus, setNewStatus] = useState({
    preference_id: rate.preferenceId,
    status: "",
  });

  useEffect(() => {
    if (rate.qualification > 2) {
      return setNewStatus({
        ...newStatus,
        status: "finished",
      });
    } else {
      return setNewStatus({
        ...newStatus,
        status: "success",
      });
    }
  }, [rate]);

  const handleChange = (e) => {
    e.preventDefault();
    setRate({
      ...rate,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarChange = (star) => {
    setRate({
      ...rate,
      qualification: star,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateStatusPayment(newStatus));
    Swal.fire({
      title: "Muchas gracias!",
      text: "Agradecemos tu tiempo para calificar por nuestros servicios, esperamos tenerte de vuelta con nosotros.",
      icon: "success",
      confirmButtonText: "Enviar Calificación",
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(newRating(boat_id, rate));
        navigate("/");
      }
    });
  };

  console.log("rate", rate);
  console.log("newStatus", newStatus);

  return (
    <div
      className={`mt-8 text-slate-500 text-center lg:flex lg:justify-evenly lg:items-center`}
    >
      <div>
        {/* Service Info */}
        <h2 className={`text-2xl underline text-[#064273] my-5`}>
          Esta es la información del servicio:
        </h2>
        <h3 className={`text-2xl text-[#1da2d8]`}>
          Embarcación: <span className={`text-slate-600`}>{rate_boat}</span>
        </h3>
        <h3 className={`text-2xl text-[#1da2d8]`}>
          Compañía: <span className={`text-slate-600`}>{rate_company}</span>
        </h3>
        <h3 className={`text-2xl text-[#1da2d8]`}>
          Destino: <span className={`text-slate-600`}>{rate_destination}</span>
        </h3>
        <h3 className={`text-2xl text-[#1da2d8] mb-6`}>
          Fecha: <span className={`text-slate-600 `}> {rate_date}</span>
        </h3>
      </div>
      <div>
        {/* service form... */}
        <form onSubmit={handleSubmit}>
          <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto">
              <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                <div className="px-12 py-5">
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    Tu opinión en importante para nosotros!
                  </h2>
                </div>
                <div className="bg-gray-200 w-full flex flex-col items-center">
                  <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-lg text-gray-800">
                      Que calificación le das al servicio prestado?
                    </span>
                    <div className="flex space-x-3">
                      <ReactStars
                        count={5}
                        onChange={handleStarChange}
                        name="qualification"
                        size={48}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <div className="w-3/4 flex flex-col">
                    <textarea
                      rows={3}
                      className="p-4 text-gray-500 rounded-xl resize-none"
                      placeholder={"Por favor, déjanos tus comentarios..."}
                      name="comment"
                      onChange={handleChange}
                    />
                    <button className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">
                      Calificar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <label className={`text-blue-500`} htmlFor="qualification">
          {" "}
          ¿Que calificación le das al servicio?{" "}
        </label>
        <ReactStars
          count={5}
          onChange={handleStarChange}
          name="qualification"
          size={24}
          activeColor="#ffd700"
        />
        <div>
          <label className={`text-blue-500`} htmlFor="comment">
            Deja tu comentario.
          </label>
          <br />
          <textarea
            onChange={handleChange}
            name="comment"
            cols="50"
            rows="5"
          ></textarea>
        </div>
        <div className={`flex justify-center align-center`}>
          <button
            className={`border-1 bg-green-600 text-white rounded-md px-3 py-1`}
          >
            Enviar
          </button>
        </div>
      </form> */}
      {/* <p className="hidden">{serviceId}</p> */}
    </div>
  );
}

export default RateForm;
