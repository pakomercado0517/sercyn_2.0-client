import React from "react";
import { useDispatch } from "react-redux";
import { updateClientPhoto } from "../../redux/actions";
import { Modal } from "flowbite-react";
import useUploadImage from "../../Hooks/useUploadImage";
import Swal from "sweetalert2";

function UploadProfileImage({ open, close, clientId }) {
  const dispatch = useDispatch();
  const { progress, imageURL, uploadImage } = useUploadImage();

  const handleImageChange = (e) => {
    e.preventDefault();
    const url = "/web-images/profile-avatar";
    const file = e.target.files[0];
    uploadImage(file, url);
  };

  const handleSubmit = () => {
    try {
      if (imageURL) {
        dispatch(updateClientPhoto(clientId, imageURL));
        Swal.fire({
          title: "Excelente!",
          text: "Imagen cargada con exito",
          confirmButtonText: "Continuar",
          confirmButtonColor: "green",
        }).then((res) => {
          if (res.isConfirmed) {
            close();
          }
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `Error al cargar y/o enviar la imagen... ${error}`,
        cancelButtonText: "Cerrar e intentar de nuevo",
      });
    }
  };

  return (
    <>
      <Modal show={open === true} onClose={close}>
        <Modal.Header>
          <h3 className="text-xl text-cyan-600 text-semibold divide-x">
            Actualiza tu Foto de Perfil
          </h3>
        </Modal.Header>
        <Modal.Body>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Haz click para subir</span> o
                arrastra y suelta la imagen aquí
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG o GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              onChange={handleImageChange}
              type="file"
              className="hidden"
            />
          </label>
          <div className="flex justify-center items-center w-full mt-5">
            <div
              className={`bg-cyan-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${
                progress === 0 || progress === 100 ? "hidden" : ""
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <button
            onClick={handleSubmit}
            className=" bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
          >
            Definir Imagen
          </button>
          <div>
            <img
              src={imageURL?.photo}
              alt="profilePhoto"
              className={`w-24 h-24 rounded-full ${
                progress === 0 ? "hidden" : ""
              }`}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UploadProfileImage;
