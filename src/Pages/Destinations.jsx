import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDestinations, getDestinationById } from "../redux/actions";
import Paginate from "../Components/Paginate";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";

function Destinations() {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);
  const destinationById = useSelector((state) => state.destinationById);
  const itemsFiltered = useSelector((state) => state.itemsFiltered);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  const paging = (page) => setCurrentPage(page);
  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentItem = itemsFiltered.length > 0 ? itemsFiltered : destinations;
  const showItems =
    currentItem.length > 0
      ? currentItem.slice(indexOfFirstItem, indexOfLastItem)
      : currentItem;

  useEffect(() => {
    dispatch(getAllDestinations());
  }, [dispatch]);

  const handleOnSelected = (item) => {
    dispatch(getDestinationById(item.id));
  };

  console.log("destinationById", destinationById);
  console.log("currentItem", currentItem);
  console.log("currentItem.length", currentItem.length);

  return (
    <div>
      <div className={`flex justify-center`}>
        <SearchBar items={currentItem} ishandleOnSelected={handleOnSelected} />
      </div>
      <div className={`flex justify-center`}>
        <Paginate
          totalItems={currentItem.length}
          itemPerPage={postPerPage}
          paging={paging}
        />
      </div>
      <div className={`flex flex-col items-center md:flex-row justify-center`}>
        {showItems.length > 0 ? (
          showItems.map((el) => {
            return (
              <div key={el.id}>
                <Card
                  id={el.id}
                  photo={el.image}
                  name={el.name}
                  buttonText="Reservar"
                />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Destinations;
