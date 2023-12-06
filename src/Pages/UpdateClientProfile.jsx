import React from "react";
import UpdateProfileForm from "../Components/client/UpdateProfileForm";
import { useSelector } from "react-redux";

function UpdateClientProfile() {
  const clientData = useSelector((state) => state.clientData);

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-2xl font-bold mb-10 text-[#064273]">
        Editar datos de Usuario.
      </h1>
      <UpdateProfileForm profile={clientData} />
    </div>
  );
}

export default UpdateClientProfile;
