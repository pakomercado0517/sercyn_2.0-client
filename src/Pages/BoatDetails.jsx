import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { service_order } from "../redux/actions";
import BoatsDetailsCard from "../Components/boats/BoatsDetailsCard";
import { Rating } from "flowbite-react";

function BoatDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [globalStars, setGlobalStars] = useState(0);
  const boatById = useSelector((state) => state.boatById);
  const rating = useSelector((state) => state.rating);
  const [order, setOrder] = useState({
    boat: boatById.name,
  });
  const [selectedItem, setSelectedItem] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(service_order(order));
    navigate("/form/boat");
  };

  const handleSelect = (destination, price, priceId) => {
    setOrder({
      ...order,
      destination,
      price,
      priceId,
    });
    setSelectedItem(!selectedItem);
  };

  useEffect(() => {
    const getGlobalStars = (stars, quals) => {
      const globalStars = stars / quals;
      const result = globalStars.toFixed(1);
      setGlobalStars(Number(result));
    };
    getGlobalStars(rating.stars, rating.count);
  }, [rating.stars, rating.count]);

  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#064273] Dark:text-gray-100">
                {`Embarcación: ${boatById.name}`}
              </h2>
              <div className="mt-4 flex justify-start items-center">
                <img
                  src={boatById.Company.logo}
                  alt={boatById.Company.companyName}
                  className=" w-8 h-auto mr-5"
                />
                <p className=" text-[#1da2d8] Dark:text-gray-400">
                  {`${boatById.Company.companyName}`}
                </p>
              </div>
              <div className="flex justify-start gap-1 mt-2 items-center">
                <Rating size="md">
                  {rating.stars !== null ? (
                    <>
                      <Rating.Star />
                      <p className="ml-2 text-lg font-bold text-cyan-600">
                        {globalStars}{" "}
                      </p>
                      <span className="mx-1.5 h-1 w-1 rounded-full bg-sercynBlueLight" />
                      <span className="text-sm font-medium text-gray-400 underline">
                        {rating.count} reseñas
                      </span>
                    </>
                  ) : (
                    <>
                      <Rating.Star filled={false} />
                      <p className="ml-2 text-lg font-bold text-cyan-600">
                        No cuenta con calificaciones aún...
                      </p>
                    </>
                  )}
                </Rating>
              </div>
            </div>
          </div>
          <header className="flex flex-col items-center">
            <h1 className="text-2xl text-[#064273] text-center">
              Puedes seleccionar un Destino
            </h1>
            <span className="text-center text-sm text-[#1da2d8]">
              Recuerda que en cualquiera de los destinos dependemos mucho del
              estado del clima
            </span>
          </header>
          <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boatById.Prices.map((el) => {
              return (
                <BoatsDetailsCard
                  key={el.id}
                  handleSubmit={handleSubmit}
                  el={el}
                  order={order}
                  handleSelect={handleSelect}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BoatDetails;
