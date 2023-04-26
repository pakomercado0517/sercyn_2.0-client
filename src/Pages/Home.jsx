import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBYBestRating,
  getAllDestinations,
  getClientLogged,
} from "../redux/actions";
import BoatsWithBestRating from "../Components/BoatsWithBestRating";

function Home() {
  const dispatch = useDispatch();
  const [client] = useState(window.localStorage.getItem("clientLogged"));

  useEffect(() => {
    dispatch(getBYBestRating());
    dispatch(getAllDestinations());
  }, [dispatch]);

  useEffect(() => {
    const setclientLogged = async () => {
      if (client) {
        await dispatch(getClientLogged(JSON.parse(client)));
      }
    };
    setclientLogged();
  }, [dispatch]);

  // const handleFormClick = async (id) => {
  //   await dispatch(getBoatById(id));
  //   await navigate("/form/boat");
  // };

  return (
    // try a new module...
    <div>
      <div className="container mx-auto">
        <div
          className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
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
      <h1 className="text-3xl text-[#eccca2] text-center my-6 underline">
        Nuestros Destinos.
      </h1>

      {/* destination cards */}
      <div className="md:flex md:flex-col md:items-center lg:flex-row lg:justify-evenly lg:my-6">
        <div className="flex flex-col items-center bg-white border border-blue-200 rounded-lg shadow md:flex-row md:max-w-xl md:my-2 hover:bg-gray-100">
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
          <div className="flex flex-col items-center bg-white border border-blue-200 rounded-lg shadow md:flex-row md:max-w-xl md:my-2 hover:bg-gray-100">
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
      </div>

      <div className="md:flex md:flex-col md:items-center lg:flex-row lg:justify-evenly lg:my-6">
        <div className="flex flex-col items-center bg-white border border-blue-200 rounded-lg shadow md:flex-row md:max-w-xl md:my-2 hover:bg-gray-100">
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
          <div className="flex flex-col items-center bg-white border border-blue-200 rounded-lg shadow md:flex-row md:max-w-xl md:my-2 hover:bg-gray-100">
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

      {/* Boats with best ratings */}
      <h1 className="text-3xl text-[#eccca2] text-center underline mb-5">
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
      </div>
    </div>

    // <div>
    //   <div className={`pt-8 overflow-x-hidden ${styles.initial_page}`}>
    //     <div
    //       className={`w-[60vw] mx-auto text-white z-10 relative md:w-[48vw] md:text-xl`}
    //     >
    //       <h3 className={`text-center my-5`}>Náutica SerCyn</h3>
    //       <p className={`text-justify`}>
    //         Visita y disfruta de las maravillas que tenemos para ti!. <br />
    //         Conoce la <strong>Isla de Lobos</strong> y los maravillosos{" "}
    //         <strong>Arrecifes coralinos</strong> junto a toda su biodiversidad.
    //       </p>
    //     </div>
    //     <div
    //       className={`w-[60vw] relative left-[18vw] bottom-[70px] md:right-[30px] md:bottom-[130px] lg:w-[480px] lg:h-[420px] lg:left-[33vw]`}
    //     >
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2F%E2%80%94Pngtree%E2%80%94hand%20drawn%20unmanned%20speedboat%20at_7156987.png?alt=media&token=f6d8566d-224f-4da5-baf5-8ab5c10b63b1"
    //         alt="landing_image"
    //       />
    //     </div>
    //     <div className={`flex flex-col items-center relative bottom-[90px]`}>
    //       {clientLogged.length === 0 ? (
    //         <>
    //           <h3 className={`text-xl p-2 mb-5 text-slate-400 `}>
    //             Por favor, inicia sesión para poder contratar y disfrutar de
    //             nuestro servcio.
    //           </h3>
    //           <Link to="/login">
    //             <div
    //               className={`w-[80vw] h-9 flex justify-center bg-blue-500 items-center border border-slate-700 rounded-lg relative  shadow-lg shadow-blue-500 cursor-pointer md:w-[52vw]`}
    //             >
    //               <p className={`text-white text-lg`}>Inicia Sesión</p>
    //             </div>
    //           </Link>
    //         </>
    //       ) : (
    //         <></>
    //       )}
    //     </div>
    //   </div>
    //   <div>
    //     <h1 className={`text-center text-[#007ea7] text-2xl mb-8 `}>
    //       Embarcaciones disponibles.
    //     </h1>
    //     <div
    //       className={`w-full flex justify-center items-center flex-col md:flex-row md:justify-evenly`}
    //     >
    //       {boatByBestRating.length > 0 ? (
    //         boatByBestRating.map((el) => {
    //           return (
    //             <Card
    //               key={el.Boat?.id}
    //               id={el.Boat?.id}
    //               photo={el.Boat?.photo}
    //               name={el.Boat?.name}
    //               qualification={el?.qualification}
    //               handleFormClick={() => handleFormClick(el.Boat.id)}
    //               buttonText="Contratar"
    //               showRating={true}
    //             />
    //           );
    //         })
    //       ) : (
    //         <></>
    //       )}
    //     </div>
    //     <div
    //       className={`text-center w-[40vw] h-10 mx-auto my-8 rounded-md flex justify-center items-center border border-slate-600 shadow-md shadow-blue-400`}
    //     >
    //       <Link to="/boats">
    //         <h3 className={`text-lg text-[#007ea7]`}>Ver más</h3>
    //       </Link>
    //     </div>
    //     <div className={`my-3`}>
    //       <h1 className={`text-center text-[#007ea7] text-2xl`}>Destinos.</h1>
    //     </div>
    //     <div className={`flex flex-wrap justify-evenly`}>
    //       {destinations.length > 0 ? (
    //         destinations.map((el) => {
    //           return (
    //             <Card
    //               key={el.id}
    //               id={el.id}
    //               photo={el.image}
    //               name={el.name}
    //               buttonText="Reservar"
    //             />
    //           );
    //         })
    //       ) : (
    //         <></>
    //       )}
    //     </div>
    //     <Link to="/destinations">
    //       <div
    //         className={`text-center w-[45vw] h-10 mx-auto my-8 rounded-md flex justify-center items-center border border-slate-600 shadow-md shadow-blue-400`}
    //       >
    //         <h3 className={`text-lg text-[#007ea7]`}>Ver más destinos</h3>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
  );
}

export default React.memo(Home);
