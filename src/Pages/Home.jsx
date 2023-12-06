import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    // try a new module...
    <div>
      <div className="container mx-auto">
        <div
          className="bg-cover rounded-md bg-center h-auto text-white py-24 px-10 object-fill"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Fla-isla-de-los-lobos.jpg?alt=media&token=0890a33c-8c2b-40f0-8eac-f47ddfd5c441)",
          }}
        >
          <div className="md:w-1/2">
            <p className="font-bold text-sm uppercase">Bienvenidos a </p>
            <p className="text-3xl font-bold">Náutica SerCyn</p>
            <p className="text-2xl mb-10 leading-none">
              Conocenos y vive una experiencia INOLVIDABLE
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-[#eccca2] text-center my-6 font-bold">
        Nuestros Destinos.
      </h1>

      {/* destination cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-3 lg:my-6">
        <div className="max-w-sm flex flex-col items-center bg-white border border-blue-200 rounded-lg shadow md:flex-row md:max-w-xl md:my-2 hover:bg-gray-100">
          <img
            className="object-cover ml-1 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Fmarek-okon-tWWCqIMiUmg-unsplash.jpeg?alt=media&token=5a75b12e-8e46-4ac6-a4fd-b3f2d04d9c05"
            alt="Reef"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#064273] ">
              Arrecifes Coralinos.
            </h5>
            <p className="mb-3 font-normal text-[#1da2d8]">
              Visita nuestros arrecifes coralinos, descubre y conoce la belleza
              y toda su biodiversidad.
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-sm flex flex-col items-center bg-white border border-blue-200 rounded-lg shadow md:flex-row md:max-w-xl md:my-2 hover:bg-gray-100">
            <img
              className="object-cover ml-1 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2F2a70ea_4a43082598564436b30c902b72fd4fa8_mv2.webp?alt=media&token=e38efe6d-db87-41b0-ba9c-169b7e77d51f"
              alt="lobosIsland"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#064273] ">
                Isla de Lobos.
              </h5>
              <p className="mb-3 font-normal text-[#1da2d8]">
                La isla de Lobos es ideal para quienes buscan un lugar tranquilo
                y hermoso para relajarse en contacto con la naturaleza.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm flex flex-col items-center bg-white border border-blue-200 rounded-lg shadow md:flex-row md:max-w-xl md:my-2 hover:bg-gray-100">
          <img
            className="object-cover ml-1 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2F3-5-300x169.jpg?alt=media&token=acfa942f-9d68-4577-b51f-db2dfeb2cd0b"
            alt="river-tuxpan"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#064273] ">
              Río Tuxpan.
            </h5>
            <p className="mb-3 font-normal text-[#1da2d8]">
              ¡Aventúrate en los manglares del río Tuxpan y siente la naturaleza
              en tu piel!
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-sm flex flex-col items-center bg-white border border-blue-200 rounded-lg shadow md:flex-row md:max-w-xl md:my-2 hover:bg-gray-100">
            <img
              className="object-cover ml-1 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Farton38.jpg?alt=media&token=eebc2abd-ccdb-4321-84f5-a5f7ea2e05c8"
              alt="fishing"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#064273] ">
                Pesca Deportiva.
              </h5>
              <p className="mb-3 font-normal text-[#1da2d8]">
                ¡Ven y siente la adrenalina de la Pesca Deportiva en nuestras
                diversas zonas de pesca!.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/boats" className="flex justify-center mt-5">
        <Button>Mira por nuestras Embarcaciones</Button>
      </Link>

      {/* Boats with best ratings */}

      {/* we keep on standby to fix some details for later */}

      {/* <h1 className="text-3xl text-[#eccca2] text-center underline mb-5">
        Experiencias de nuestros clientes
      </h1>
      <div className="flex justify-center">
        <BoatsWithBestRating />
      </div>
      <div className="flex justify-center">
        <Link
          to="/login"
          className="mb-2 block w-9/12 rounded bg-[#1da2d8] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white text-center shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Inicia Sesíon aqui o explora y conoce las embarcaciones disponibles.
        </Link>
      </div> */}
    </div>
  );
}

export default React.memo(Home);
