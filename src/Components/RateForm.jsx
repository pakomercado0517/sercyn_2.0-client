import React, { useState, useEffect } from "react";
import {
  newRating,
  updateStatusPayment,
  updateTransaction,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal, Label, Radio, Textarea, Button } from "flowbite-react";
import Swal from "sweetalert2";

function RateForm({
  company_name,
  destination_name,
  client_id,
  serviceId,
  closeModal,
  transactionId,
  boatId,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rate, setRate] = useState({
    qualification: 0,
    condition_qualification: 0,
    destination_qualification: 0,
    global_qualification: 0,
    operator_qualification: 0,
    comment: "",
    clientId: client_id,
    boatId: boatId,
    preferenceId: serviceId,
    stars: 0,
  });
  const [newStatus, setNewStatus] = useState({
    id: transactionId,
    preference_id: rate.preferenceId,
    status: "",
  });

  useEffect(() => {
    setNewStatus({ ...newStatus });

    if (rate.stars > 2) {
      return setNewStatus({
        ...newStatus,
        status: "finished",
      });
    } else {
      return setNewStatus({
        ...newStatus,
        status: "lowTier",
      });
    }
  }, [rate.stars]);

  useEffect(() => {
    const sum =
      parseInt(rate.condition_qualification) +
      parseInt(rate.destination_qualification) +
      parseInt(rate.global_qualification) +
      parseInt(rate.operator_qualification);

    const getPercentage = (sum / 40) * 5;

    setRate({ ...rate, stars: getPercentage });
  }, [
    rate.condition_qualification,
    rate.destination_qualification,
    rate.global_qualification,
    rate.operator_qualification,
    rate?.stars,
  ]);

  const handleChange = (e) => {
    setRate({
      ...rate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("rate before send", rate);

    dispatch(updateStatusPayment(newStatus));
    dispatch(updateTransaction(newStatus));
    dispatch(newRating(rate));
    Swal.fire({
      title: "Muchas gracias!",
      text: "Agradecemos tu tiempo para calificar por nuestros servicios, esperamos tenerte de vuelta con nosotros.",
      icon: "success",
      confirmButtonText: "Enviar Calificación",
    }).then((res) => {
      if (res.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <Modal.Body>
        <div className="flex flex-col gap-3">
          <Label className="mt-3 border-t">
            Que calificación le das al servicio prestado por la embarcación "
            {company_name}"
          </Label>
          <fieldset className="flex flex-row gap-3 items-center divide-y">
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={1}
            />
            1
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={2}
            />
            2
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={3}
            />
            3
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={4}
            />
            4
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={5}
            />
            5
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={6}
            />
            6
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={7}
            />
            7
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={8}
            />
            8
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={9}
            />
            9
            <Radio
              name="global_qualification"
              onChange={handleChange}
              value={10}
            />
            10
          </fieldset>
          <Label className="mt-3 border-t">
            ¿Que calificación le das al operador de la embarcación (amabilidad,
            información, atención al cliente...)?
          </Label>
          <fieldset className="flex gap-3 items-center divide-y">
            <Radio
              name="operator_qualification"
              value={1}
              onChange={handleChange}
            />
            1
            <Radio
              name="operator_qualification"
              value={2}
              onChange={handleChange}
            />
            2
            <Radio
              name="operator_qualification"
              value={3}
              onChange={handleChange}
            />
            3
            <Radio
              name="operator_qualification"
              value={4}
              onChange={handleChange}
            />
            4
            <Radio
              name="operator_qualification"
              value={5}
              onChange={handleChange}
            />
            5
            <Radio
              name="operator_qualification"
              value={6}
              onChange={handleChange}
            />
            6
            <Radio
              name="operator_qualification"
              value={7}
              onChange={handleChange}
            />
            7
            <Radio
              name="operator_qualification"
              value={8}
              onChange={handleChange}
            />
            8
            <Radio
              name="operator_qualification"
              value={9}
              onChange={handleChange}
            />
            9
            <Radio
              name="operator_qualification"
              value={10}
              onChange={handleChange}
            />
            10
          </fieldset>
          <Label className="mt-3 border-t">
            ¿Que calificación le das a las condiciones de la embarcación
            (limpieza, estado, equipo, comodidad...)?
          </Label>
          <fieldset className="flex gap-3 items-center">
            <Radio
              name="condition_qualification"
              value={1}
              onChange={handleChange}
            />
            1
            <Radio
              name="condition_qualification"
              value={2}
              onChange={handleChange}
            />
            2
            <Radio
              name="condition_qualification"
              value={3}
              onChange={handleChange}
            />
            3
            <Radio
              name="condition_qualification"
              value={4}
              onChange={handleChange}
            />
            4
            <Radio
              name="condition_qualification"
              value={5}
              onChange={handleChange}
            />
            5
            <Radio
              name="condition_qualification"
              value={6}
              onChange={handleChange}
            />
            6
            <Radio
              name="condition_qualification"
              value={7}
              onChange={handleChange}
            />
            7
            <Radio
              name="condition_qualification"
              value={8}
              onChange={handleChange}
            />
            8
            <Radio
              name="condition_qualification"
              value={9}
              onChange={handleChange}
            />
            9
            <Radio
              name="condition_qualification"
              value={10}
              onChange={handleChange}
            />
            10
          </fieldset>
          <Label className="mt-3 border-t">
            ¿Que calificación le das al destino {destination_name}?
          </Label>
          <fieldset className="flex gap-3 items-center">
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={1}
            />
            1
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={2}
            />
            2
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={3}
            />
            3
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={4}
            />
            4
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={5}
            />
            5
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={6}
            />
            6
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={7}
            />
            7
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={8}
            />
            8
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={9}
            />
            9
            <Radio
              name="destination_qualification"
              onChange={handleChange}
              value={10}
            />
            10
          </fieldset>
          <Label className="mt-3 border-t">
            Dejanos tus comentarios, es muy importante porque nos ayudas a
            mejorar el servicio y la experiencia de usuario.
          </Label>
          <Textarea name="comment" onChange={handleChange} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button gradientMonochrome="cyan" onClick={handleSubmit}>
          Calificar
        </Button>
        <Button gradientMonochrome="failure" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </>
  );
}

export default RateForm;
