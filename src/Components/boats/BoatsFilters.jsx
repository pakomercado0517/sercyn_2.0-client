import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "flowbite-react";
import {
  getBoatByDestination,
  getAllDestinations,
  getAllBoats,
  filterByName,
  filterByPrice,
  resetFilter,
} from "../../redux/actions";
import { useItemsPerPage } from "../../Hooks/useItemsPerPage";

function Filters() {
  const dispatch = useDispatch();
  const boats = useSelector((state) => state.boats);
  const destinations = useSelector((state) => state.destinations); //get the destinies for showing on form
  const [activeFilter, setActiveFilter] = useState(false);
  const [getDestination, setGetDestination] = useState("");
  const { itemsFiltered } = useItemsPerPage({ getItems: boats });

  useEffect(() => {
    dispatch(getAllDestinations());
  }, [dispatch]);

  const handleDestinationChange = async (e) => {
    setGetDestination(e.target.value);
    if (e.target.value === "") {
      setActiveFilter(false);
      dispatch(resetFilter(boats));
      await dispatch(getAllBoats());
    } else if (e.target.value !== null) {
      setActiveFilter(true);
      await dispatch(getBoatByDestination(e.target.value));
    }
  };

  const handleNameChange = async (e) => {
    const { value } = e.target;
    if (value === "") {
      dispatch(resetFilter(boats));
      await dispatch(getAllBoats());
    } else if (value === "asc") {
      await dispatch(filterByName(value));
    } else if (value === "desc") {
      await dispatch(filterByName(value));
    }
  };

  const handlePriceChange = async (e) => {
    const { value } = e.target;
    if (e.target.value === "") {
      dispatch(resetFilter(boats));
      await dispatch(getAllBoats());
    } else if (value === "asc") {
      await dispatch(filterByPrice(value));
    } else if (value === "desc") {
      await dispatch(filterByPrice(value));
    }
  };

  // console.log("getDestination", getDestination);

  return (
    <form className={`grid grid-cols-2 md:grid-cols-3 gap-3 mt-3`}>
      <div className="">
        <Select
          multiple={false}
          name="destinations"
          id="destinations"
          value={getDestination}
          onChange={handleDestinationChange}
        >
          <option className="text-[#064273]" value="">
            Selecciona un Destino
          </option>
          {destinations.map((el) => {
            return (
              <option key={el.id} value={el.name} className="text-[#064273]">
                {el.name}
              </option>
            );
          })}
        </Select>
      </div>
      <div>
        <Select name="orderByName" id="orderByName" onChange={handleNameChange}>
          <option className="text-[#064273]" value="">
            Filtrar por nombres:
          </option>
          <option className="text-[#064273]" value="asc">
            A - Z
          </option>
          <option className="text-[#064273]" value="desc">
            Z - A
          </option>
        </Select>
      </div>
      <div>
        <Select
          name="orderByPrice"
          id="orderByPrice"
          onChange={handlePriceChange}
          disabled={!activeFilter}
        >
          <option className="text-[#064273]" value="">
            Filtrar por Precios
          </option>
          <option className="text-[#064273]" value="asc">
            Menor Precio
          </option>
          <option className="text-[#064273]" value="desc">
            Mayor Precio
          </option>
        </Select>
      </div>
    </form>
  );
}

export default Filters;
