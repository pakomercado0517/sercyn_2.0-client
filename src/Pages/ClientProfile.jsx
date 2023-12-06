import React from "react";
import ClientInformation from "../Components/client/ClientInformation";
import useGetClientLogged from "../Hooks/useGerClientLogged";
import ServiceTable from "../Components/ServiceTable";

function ClientProfile() {
  const { clientData } = useGetClientLogged();

  return (
    <div className="">
      <ClientInformation />

      {clientData?.Transactions?.length > 0 ? (
        <>
          <ServiceTable />
        </>
      ) : (
        <div>
          <h1 className={`text-cyan-600 text-center text-2xl font-bold my-4`}>
            No hay servicios contratados aún...
          </h1>
        </div>
      )}
    </div>
  );
}

export default ClientProfile;
