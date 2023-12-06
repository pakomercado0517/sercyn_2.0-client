import React from "react";
import UploadProfileImage from "./UploadProfileImage";
import useModal from "../../Hooks/useModal";
import { MdPhoneInTalk, MdMarkEmailRead, MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrTwitter, GrLinkedin } from "react-icons/gr";
import useGetClientLogged from "../../Hooks/useGerClientLogged";
import { Button } from "flowbite-react";

function ClientInformation() {
  const { clientData } = useGetClientLogged();
  const { handleOpenModal, handleCloseModal, isOpen, customStyles } =
    useModal();
  return (
    <div className="max-w-3xl w-full mx-auto z-10">
      <div className="flex flex-col">
        <div className="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
          <div className="flex-none sm:flex">
            <div className=" relative h-32 w-32 sm:mb-0 mb-3">
              <img
                src={clientData?.photo}
                alt={clientData?.first_name}
                className=" w-32 h-32 object-cover rounded-2xl"
              />
              <Button
                gradientMonochrome="info"
                onClick={handleOpenModal}
                className="absolute h-8 w-8 -right-3 bottom-0  -ml-3 text-white p-1 text-xs font-medium tracking-wider rounded-full transition ease-in duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                </svg>
              </Button>
              <UploadProfileImage
                open={isOpen}
                close={handleCloseModal}
                style={customStyles}
                clientId={clientData?.id}
              />
            </div>
            <div className="flex-auto sm:ml-5 justify-evenly">
              <div className="flex items-center justify-between sm:mt-2">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">
                      {`${clientData?.first_name} ${clientData?.last_name}`}
                    </div>
                    <div className="flex-auto text-gray-500 my-1">
                      <span className="mr-3 ">
                        {clientData?.status ? "Verificado" : "No Verificado"}
                      </span>
                      <span className="mr-3 border-r border-gray-200  max-h-0" />
                      <span>{`${clientData?.city}, ${clientData?.state}`}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex-1 gap-2 text-[#1da2d8] inline-flex items-center">
                  <MdFacebook />
                  <GrTwitter />
                  <GrLinkedin />
                </div>
              </div>
              <div className="flex pt-2  text-sm text-gray-500">
                <div className="flex-1 inline-flex items-center">
                  <MdPhoneInTalk />
                  <p className="ml-2">{clientData?.phone_number}</p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  <MdMarkEmailRead />
                  <p className="ml-2">{clientData?.email}</p>
                </div>
                <Link to="/client/updateProfile">
                  <Button gradientMonochrome="info">Editar Perfil</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientInformation;
