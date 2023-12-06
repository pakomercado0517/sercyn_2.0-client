import React, { useState } from "react";
import { Button, Table, Modal } from "flowbite-react";
import RateForm from "./RateForm";
import PaymentConfirm from "./payment/PaymentConfirm";
import useGetClientLogged from "../Hooks/useGerClientLogged";

function ServiceTable() {
  const [openModal, setOpenModal] = useState(false);
  const [serviceInfo, setServiceInfo] = useState({});
  const [openPayButton, setOpenPayButton] = useState(false);
  const [transaction, setTransaction] = useState({});
  const { clientData } = useGetClientLogged();

  const handleCloseModal = () => setOpenModal(false);

  const handleClosePayButton = () => setOpenPayButton(false);

  const renderPayButton = (transaction) => {
    setOpenPayButton(true);
    setTransaction(transaction);
  };

  const handleOpenModal = (
    boat,
    destination,
    client_id,
    serviceId,
    transactionId,
    boatId
  ) => {
    setOpenModal(true);
    setServiceInfo({
      boat,
      destination,
      client_id,
      serviceId,
      transactionId,
      boatId,
    });
  };

  const statusButton = (trx) => {
    if (trx.status === "approved") {
      return (
        <Button
          gradientMonochrome="success"
          onClick={() =>
            handleOpenModal(
              trx.Boat?.name,
              trx.Destination?.name,
              trx.ClientId,
              trx.preference_id,
              trx.id,
              trx.BoatId
            )
          }
        >
          Calificar Servicio
        </Button>
      );
    } else if (trx.status === "lowTier") {
      return <></>;
    } else if (
      trx.status === "pending to pay" ||
      trx.status === "rejected" ||
      trx.status === null
    ) {
      return (
        <Button gradientMonochrome="info" onClick={() => renderPayButton(trx)}>
          Intentar Pago
        </Button>
      );
    } else {
      return <></>;
    }
  };

  const renderStatus = (status) => {
    if (status === "approved") {
      return "Servicio Pagado";
    } else if (status === "finished") {
      return "Servicio completado exitosamente";
    } else if (status === "lowTier") {
      return "Servicio con baja calificación, pendiente de revisión.";
    } else {
      return "Pendiente de Pagar";
    }
  };

  return (
    <section
      className={`w-full flex flex-col items-center text-lg text-center text-slate-400  p-4 rounded-[20px]`}
    >
      <h1 className="text-center font-bold text-2xl text-cyan-600 my-4">
        Últimos servicios contratados
      </h1>
      <Table>
        <Table.Head>
          <Table.HeadCell>Destino</Table.HeadCell>
          <Table.HeadCell>Compañia</Table.HeadCell>
          <Table.HeadCell>Embarcación</Table.HeadCell>
          <Table.HeadCell>Fecha</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Pay Button</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {clientData.Transactions.map((cell) => {
            const formatedDate = cell.date.slice(0, 10);
            return (
              <Table.Row key={cell.id}>
                <Table.Cell>{cell.Destination.name}</Table.Cell>
                <Table.Cell>{cell.Boat.Company.companyName}</Table.Cell>
                <Table.Cell>{cell.Boat.name}</Table.Cell>
                <Table.Cell>
                  {formatedDate.split("-").reverse().join("/")}
                </Table.Cell>
                <Table.Cell>
                  {renderStatus(cell.status)}
                  {/* {cell.status === "approved"
                    ? "Servicio Pagado"
                    : cell.status === "finished"
                    ? "Servicio completado exitosamente"
                    : "Pendiente de Pagar"} */}
                </Table.Cell>
                <Table.Cell className="flex justify-center">
                  {statusButton(cell)}
                  {/* {cell.status === "approved" ? (
                    <Button
                      gradientMonochrome="success"
                      onClick={() =>
                        handleOpenModal(
                          cell.Boat.name,
                          cell.Destination.name,
                          cell.ClientId,
                          cell.preference_id,
                          cell.id
                        )
                      }
                    >
                      Calificar Servicio
                    </Button>
                  ) : cell.status === "finished" ? (
                    <></>
                  ) : cell.status === "pending to pay" ||
                    cell.status === "rejected" ||
                    cell.status === null ? (
                    <Button
                      gradientMonochrome="info"
                      onClick={() => renderPayButton(cell)}
                    >
                      Intentar Pago
                    </Button>
                  ) : (
                    <></>
                  )} */}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Modal show={openModal === true} onClose={handleCloseModal}>
        <Modal.Header className={`text-xl`}>Calificar servicio</Modal.Header>
        <RateForm
          company_name={serviceInfo.boat}
          closeModal={handleCloseModal}
          destination_name={serviceInfo.destination}
          client_id={serviceInfo.client_id}
          serviceId={serviceInfo.serviceId}
          transactionId={serviceInfo.transactionId}
          boatId={serviceInfo.boatId}
        />
      </Modal>

      <PaymentConfirm
        isOpen={openPayButton}
        onClose={handleClosePayButton}
        transaction={transaction}
      />
    </section>
  );
}

export default ServiceTable;
