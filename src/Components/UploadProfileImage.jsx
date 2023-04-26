import React from "react";
import { useDispatch } from "react-redux";
import { updateClientPhoto } from "../redux/actions";
import Modal from "react-modal";
import useUploadImage from "../Hooks/useUploadImage";
import Swal from "sweetalert2";

function UploadProfileImage({ open, close, style, clientId }) {
  const dispatch = useDispatch();
  const { progress, imageURL, uploadImage } = useUploadImage();

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    uploadImage(file);
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
      <Modal isOpen={open} onRequestClose={close} style={style}>
        <h1 className="text-center text-[#064273] underline font-bold text-2xl mb-4">
          Selecciona la foto de perfil{" "}
        </h1>
        <div className="flex items-center justify-center w-full">
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
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              onChange={handleImageChange}
              type="file"
              className="hidden"
            />
          </label>
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          {progress === 100 ? (
            <div>
              <img
                src={imageURL?.photo}
                alt="profilePhoto"
                className="w-32 h-32 rounded-full"
              />
              <button
                onClick={handleSubmit}
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Definir Imagen
              </button>
            </div>
          ) : (
            <div
              className="bg-[#1da2d8] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default UploadProfileImage;
