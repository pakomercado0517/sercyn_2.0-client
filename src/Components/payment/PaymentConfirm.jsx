import MercadoPagoButton from "../MercadoPagoButton";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Modal, Button } from "flowbite-react";

function PaymentConfirm({ isOpen, onClose, transaction }) {
  const navigate = useNavigate();

  const handleRemove = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Reservación cancelada",
      text: "La reservación se ha cancelado",
      icon: "warning",
      confirmButtonText: "Continuar",
    }).then(async (res) => {
      if (res.isConfirmed) {
        await navigate("/");
      }
    });
  };
  return (
    <>
      <Modal show={isOpen === true} size="md" onClose={onClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="text-6xl mx-auto mb-4 h-14 w14 text-purple-700" />
            <h3>
              Seras redireccionado a la página de Mercado Pago para proceder a
              la compra de tu servicio. Al terminar el proceso, regresaras
              automaticamente a la página de Náutica SerCyn
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <div className="flex flex-col items-center">
            {transaction.length != 0 && (
              <MercadoPagoButton
                mp_id={transaction.preference_id}
                amount={transaction.price}
              />
            )}
            <Button
              className="h-12 self-center mb-5"
              gradientMonochrome="failure"
              onClick={handleRemove}
            >
              Cancelar reservación
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentConfirm;
