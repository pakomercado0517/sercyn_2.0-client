import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getBYBestRating,
  getAllDestinations,
  getBoatById,
  getClientLogged,
} from "../redux/actions";
import Card from "../Components/Card";
import styles from "./styles/Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clientLogged = useSelector((state) => state.clientLogged);
  const boatByBestRating = useSelector((state) => state.bestRating);
  const destinations = useSelector((state) => state.destinations);
  const rating = useSelector((state) => state.rating);
  useEffect(() => {
    dispatch(getBYBestRating());
    dispatch(getAllDestinations());
  }, [dispatch]);

  useEffect(() => {
    const setclientLogged = async () => {
      const clientLoggedJSON = window.localStorage.getItem("clientLogged");
      if (clientLoggedJSON) {
        const client = JSON.parse(clientLoggedJSON);
        await dispatch(getClientLogged(client));
      }
    };
    setclientLogged();
  }, [dispatch]);

  const handleFormClick = async (id) => {
    await dispatch(getBoatById(id));
    await navigate("/form/boat");
  };

  console.log("boats", boatByBestRating);
  console.log("rating", rating);

  return (
    <div>
      <div className={`pt-8 overflow-x-hidden ${styles.initial_page}`}>
        <div
          className={`w-[60vw] mx-auto text-white z-10 relative md:w-[48vw] md:text-xl`}
        >
          <h3 className={`text-center my-5`}>Náutica SerCyn</h3>
          <p className={`text-justify`}>
            Visita y disfruta de las maravillas que tenemos para ti!. <br />
            Conoce la <strong>Isla de Lobos</strong> y los maravillosos{" "}
            <strong>Arrecifes coralinos</strong> junto a toda su biodiversidad.
          </p>
        </div>
        <div
          className={`w-[60vw] relative left-[18vw] bottom-[70px] md:right-[30px] md:bottom-[130px] lg:w-[480px] lg:h-[420px] lg:left-[33vw]`}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2F%E2%80%94Pngtree%E2%80%94hand%20drawn%20unmanned%20speedboat%20at_7156987.png?alt=media&token=f6d8566d-224f-4da5-baf5-8ab5c10b63b1"
            alt="landing_image"
          />
        </div>
        <div className={`flex flex-col items-center relative bottom-[90px]`}>
          {clientLogged.length === 0 ? (
            <>
              <h3 className={`text-xl p-2 mb-5 text-slate-400 `}>
                Por favor, inicia sesión para poder contratar y disfrutar de
                nuestro servcio.
              </h3>
              <Link to="/login">
                <div
                  className={`w-[80vw] h-9 flex justify-center bg-blue-500 items-center border border-slate-700 rounded-lg relative  shadow-lg shadow-blue-500 cursor-pointer md:w-[52vw]`}
                >
                  <p className={`text-white text-lg`}>Inicia Sesión</p>
                </div>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <h1 className={`text-center text-[#007ea7] text-2xl mb-8 `}>
          Embarcaciones disponibles.
        </h1>
        <div
          className={`w-full flex justify-center items-center flex-col md:flex-row md:justify-evenly`}
        >
          {boatByBestRating.length > 0 ? (
            boatByBestRating.map((el) => {
              return (
                <Card
                  key={el.Boat?.id}
                  id={el.Boat?.id}
                  photo={el.Boat?.photo}
                  name={el.Boat?.name}
                  qualification={el?.qualification}
                  handleFormClick={() => handleFormClick(el.Boat.id)}
                  buttonText="Contratar"
                  showRating={true}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div
          className={`text-center w-[40vw] h-10 mx-auto my-8 rounded-md flex justify-center items-center border border-slate-600 shadow-md shadow-blue-400`}
        >
          <Link to="/boats">
            <h3 className={`text-lg text-[#007ea7]`}>Ver más</h3>
          </Link>
        </div>
        <div className={`my-3`}>
          <h1 className={`text-center text-[#007ea7] text-2xl`}>Destinos.</h1>
        </div>
        <div className={`flex flex-wrap justify-evenly`}>
          {destinations.length > 0 ? (
            destinations.map((el) => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  photo={el.image}
                  name={el.name}
                  buttonText="Reservar"
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
        <Link to="/destinations">
          <div
            className={`text-center w-[45vw] h-10 mx-auto my-8 rounded-md flex justify-center items-center border border-slate-600 shadow-md shadow-blue-400`}
          >
            <h3 className={`text-lg text-[#007ea7]`}>Ver más destinos</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Home);
