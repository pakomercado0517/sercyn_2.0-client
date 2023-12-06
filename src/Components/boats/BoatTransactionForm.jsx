import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPaymentData, newTransaction } from "../../redux/actions";
import useGetClientLogged from "../../Hooks/useGerClientLogged";
import PaymentConfirm from "../payment/PaymentConfirm";
import { TextInput, Label, Select, Button, Card } from "flowbite-react";

function BoatTransactionForm() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const serviceOrder = useSelector((state) => state.serviceOrder);
  const transaction = useSelector((state) => state.transaction);
  const paymentData = useSelector((state) => state.paymentData);
  const boatById = useSelector((state) => state.boatById);
  const { clientData, $client, errorLoginAlert } = useGetClientLogged();

  const [order, setOrder] = useState({
    priceId: serviceOrder.priceId,
    clientId: clientData.id,
    passenger: "",
    status: "pending to pay",
    price: serviceOrder.price,
    unit_price: serviceOrder.price,
    date: "",
    destination: serviceOrder.destination,
    title: serviceOrder.destination,
    quantity: 1,
    currency_id: "MXN",
    boat: serviceOrder.boat,
  });
  let passengers = [];

  useEffect(() => {
    if (paymentData.id) {
      dispatch(newTransaction(order, paymentData.id));
    }
  }, [paymentData.id, dispatch]);

  const setHandlePassengers = (e) => {
    e.preventDefault();
    setOrder({ ...order, passenger: parseInt(e.target.value) });
  };

  const setPassengers = (el) => {
    for (let i = 1; i <= el; i++) {
      passengers.push(
        <option key={i} className={`w-5 border rounded-md`} value={i}>
          {i}
        </option>
      );
    }
    return passengers;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setOrder({ ...order, date: e.target.value });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!$client) {
      errorLoginAlert();
    } else {
      const { token } = $client;
      await dispatch(getPaymentData(order, token));
      setIsOpen(true);
    }
  };

  return (
    <section className="flex flex-col">
      <h1 className="text-center text-xl mb-6 font-semibold text-cyan-600">
        Contesta el formulario y continua con el proceso de pago.
      </h1>
      <div className="max-w-sm flex flex-col self-center">
        <div>
          <h5 className="text-xl font-medium text-gray-500">
            {order.destination}
          </h5>
          <p className="mb-4 font-normal text-gray-400">
            Embarcacion: {order.boat}
          </p>
        </div>
        <div className="flex items-baseline text-gray-900">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-light">
            {order.price}
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500">
            /servicio
          </span>
        </div>
        <div>
          <div className="relative z-0 w-full mb-6 group">
            <Label htmlFor="floating_last_name" className="text-gray-400">
              N° de Pasajeros
            </Label>
            <Select onChange={setHandlePassengers}>
              <option value="">Seleccione</option>
              {setPassengers(boatById.capacity)}
            </Select>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Label htmlFor="floating_first_name" className="text-gray-400">
              Fecha
            </Label>
            <TextInput
              type="date"
              name="date"
              id="date"
              value={order.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button onClick={handleSubmit}>Continuar</Button>
      </div>
      <div>
        <PaymentConfirm
          isOpen={isOpen}
          onClose={closeModal}
          transaction={transaction}
        />
      </div>
    </section>
  );
}

export default BoatTransactionForm;
