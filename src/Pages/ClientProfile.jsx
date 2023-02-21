import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClientData } from "../redux/actions";
import BackPageArrow from "../Components/BackPageArrow";
import ServiceCard from "../Components/ServiceCard";
import Modal from "react-modal";
import RateForm from "../Components/RateForm";
function ClientProfile() {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const clientLogged = useSelector((state) => state.clientLogged);
  const clientData = useSelector((state) => state.clientData);
  console.log("clientData", clientData);

  // Modal styles
  const customStyles = {
    content: {
      top: "2%",
      left: "18%",
      right: "18%",
      bottom: "10%",
      transform: "translate(3%, 3%)",
      borderRadius: "20px",
    },
  };

  const rateButtonOnClick = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    dispatch(getClientData(clientLogged.data?.id));
  }, [dispatch]);

  return (
    <div
      className={`w-11/12 mx-auto mt-5 border border-slate-400 shadow-lg rounded-md`}
    >
      <div
        className={` w-[40px] h-[40px] flex justify-center items-center mt-1 ml-1 border border-slate-800 rounded-full`}
      >
        <BackPageArrow />
      </div>

      {/* ------------------Profile data-------------------------- */}
      <div className={`w-full p-3 flex justify-around`}>
        {/* profile photo */}
        <div>
          <img
            className={`w-24 h-24 rounded-full`}
            src={clientData?.photo}
            alt={clientData?.first_name}
          />
        </div>

        {/* profile  name */}

        <div
          className={`text-slate-500 flex flex-col items-center justify-center`}
        >
          <h1
            className={`text-center text-xl`}
          >{`${clientData?.first_name} ${clientData?.last_name}`}</h1>

          {/* profile information here... */}

          <div className={`flex flex-row text-slate-500`}>
            <img
              className={`w-4 h-4 mt-2`}
              src="https://img.icons8.com/material-two-tone/24/999999/phone--v1.png"
              alt="profile_image"
            />
            <p className={`text-lg ml-2`}>{clientData?.phone_number}</p>
          </div>
          <div className={`flex flex-row text-slate-500`}>
            <img src="https://img.icons8.com/ios-glyphs/24/999999/email.png" />
            <p className={`text-lg ml-2`}>{clientData?.email}</p>
          </div>
        </div>
      </div>

      {/* ----------------Client transactions...--------------------- */}

      <div>
        {clientData?.Transactions?.length > 0 ? (
          <>
            <h1 className={`text-center text-xl text-slate-500 my-5`}>
              Ultimos servicios contratados...
            </h1>
            <div className="flex flex-col items-center md:flex-row md:justify-center">
              {clientData.Transactions?.map((t) => {
                console.log("t", t);
                let service_date = t.date.slice(0, 10);
                return (
                  <div className={`w-80 flex justify-center my-7`}>
                    <ServiceCard
                      key={t.id}
                      boat_name={t.Boat.Company.name}
                      date={service_date.split("-").reverse().join("/")}
                      company_name={t.Boat.Company.name}
                      company_logo={t.Boat.Company.logo}
                      destination_name={t.Destination.name}
                      status={t.PaymentsCollection.status}
                      service_id={t.PaymentsCollection.preference_id}
                      rate_button={rateButtonOnClick}
                    />
                    {t.PaymentsCollection.status === "approved" && (
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        styles={customStyles}
                      >
                        <div
                          className={`border w-6 h-6 rounded-lg flex justify-center float-right bg-red-600 text-white`}
                        >
                          <button onClick={closeModal}>X</button>
                        </div>
                        <RateForm
                          rate_boat={t.Boat.name}
                          rate_company={t.Boat.Company.name}
                          rate_destination={t.Destination.name}
                          rate_date={service_date
                            .split("-")
                            .reverse()
                            .join("/")}
                          client_id={t.ClientId}
                          boat_id={t.BoatId}
                          serviceId={t.PaymentsCollection.preference_id}
                        />
                      </Modal>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className={`text-center mt-3`}>
            <h1 className={`text-slate-500`}>
              No hay servicios contratados aún...
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientProfile;
