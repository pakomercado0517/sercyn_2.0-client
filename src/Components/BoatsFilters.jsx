import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoatByDestination,
  getAllDestinations,
  getBoatsByAscName,
  getBoatByDescName,
  resetFilter,
  getPriceByMoreExpensive,
  getPriceByMoreCheap,
} from "../redux/actions";

function Filters() {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations); //get the destinies for showing on form
  const [getDestination, setGetDestination] = useState("");

  useEffect(() => {
    dispatch(getAllDestinations());
  }, [dispatch]);

  const handleDestinationChange = async (e) => {
    await setGetDestination(e.target.value);
    if (e.target.value !== null) {
      await dispatch(getBoatByDestination(e.target.value));
    } else if (e.target.value === "") {
      await dispatch(resetFilter());
    }
  };

  const handleNameChange = async (e) => {
    if (e.target.value === "asc") {
      await dispatch(getBoatsByAscName());
    } else if (e.target.value === "desc") {
      await dispatch(getBoatByDescName());
    } else if (e.target.value === "") {
      await dispatch(resetFilter());
    }
  };

  const handlePriceChange = async (e) => {
    if (e.target.value === "asc") {
      await dispatch(getPriceByMoreCheap(getDestination));
    } else if (e.target.value === "desc") {
      await dispatch(getPriceByMoreExpensive(getDestination));
    } else if (e.target.value === "") {
      await dispatch(resetFilter());
    }
  };

  // console.log("getDestination", getDestination);

  return (
    <div>
      <form className={`md:flex md:flex-row md:my-1`}>
        <div className={`border border-slate-500 rounded-lg my-1 p-1 md:mx-2`}>
          <select
            multiple={false}
            name="destinations"
            id="destinations"
            value={getDestination}
            onChange={handleDestinationChange}
          >
            <option value="">Selecciona un Destino</option>
            <option value="">Todos...</option>
            {destinations.map((el) => {
              return (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`border border-slate-500 rounded-lg my-1 p-1 md:mx-2`}>
          <select
            name="orderByName"
            id="orderByName"
            onChange={handleNameChange}
          >
            <option value="">Filtrar por nombres:</option>
            <option value="">Deshacer cambios...</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        <div className={`border border-slate-500 rounded-lg my-1 p-1 md:mx-2`}>
          <select
            name="orderByPrice"
            id="orderByPrice"
            onChange={handlePriceChange}
          >
            <option value="">Filtrar por Precios</option>
            <option value="">Deshacer cambios...</option>
            <option value="asc">Menor Precio</option>
            <option value="desc">Mayor Precio</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filters;
