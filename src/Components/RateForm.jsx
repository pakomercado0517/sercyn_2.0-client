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

  console.log("newStatus", newStatus);
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

  return (
    <div className={`mt-8 text-slate-500`}>
      <h1 className={`text-xl text-center text-slate-600 underline`}>
        Califica el servicio brindado
      </h1>
      <h3 className={`text-lg`}>
        Por favor, da tu opinión acerca del servicio prestado, esto nos ayuda a
        mejorar y cumplir tus expectativas.
      </h3>

      {/* Service Info */}

      <h2 className={`text-md mt-3`}>Esta es la información del servicio:</h2>
      <h3 className={`text-lg text-blue-500`}>
        Embarcación: <span className={`text-slate-600`}>{rate_boat}</span>
      </h3>
      <h3 className={`text-lg text-blue-500`}>
        Compañía: <span className={`text-slate-600`}>{rate_company}</span>
      </h3>
      <h3 className={`text-lg text-blue-500`}>
        Destino: <span className={`text-slate-600`}>{rate_destination}</span>
      </h3>
      <h3 className={`text-lg text-blue-500`}>
        Fecha: <span className={`text-slate-600`}> {rate_date}</span>
      </h3>

      {/* service form... */}

      <form onSubmit={handleSubmit}>
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
      </form>
      <p>{serviceId}</p>
    </div>
  );
}

export default RateForm;
