import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBoats, getBoatById, getPaging } from "../redux/actions";
import Paginate from "../Components/Paginate";
import BoatsFilters from "../Components/BoatsFilters";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";

function Boats() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boats = useSelector((state) => state.boats);
  const itemsFiltered = useSelector((state) => state.itemsFiltered);
  const page = useSelector((state) => state.page);
  const [postPerPage] = useState(6);
  const currentPage = page === 0 ? 1 : page;
  const pagingNumber = async (page) => await dispatch(getPaging(page));
  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentItem = itemsFiltered.length > 0 ? itemsFiltered : boats;
  const showItems =
    currentItem.length > 0
      ? currentItem.slice(indexOfFirstItem, indexOfLastItem)
      : currentItem;

  const handleClick = async (id) => {
    await dispatch(getBoatById(id));
    navigate("/boats/details");
  };

  const handleFormClick = async (id) => {
    await dispatch(getBoatById(id));
    navigate("/form/boat");
  };

  const handleOnSelected = (item) => {
    dispatch(getBoatById(item.id));
    navigate("/boats/details");
  };

  useEffect(() => {
    dispatch(getAllBoats());
  }, [dispatch]);

  // useEffect(() => {
  //   const getAccess = async () => {
  //     if (token?.length > 0) {
  //       await dispatch(getAllBoats(token));
  //     } else {
  //       Swal.fire({
  //         title: "Advertencia",
  //         text: "Por favor inicia sesión para continuar",
  //         confirmButtonText: "Iniciar sesión",
  //         icon: "warning",
  //       }).then((response) => {
  //         navigate("/login");
  //       });
  //     }
  //   };
  //   console.log("token", token);

  //   getAccess();
  // }, [dispatch, token]);

  console.log("currentItem", currentItem);

  return (
    <div>
      <div className={`flex justify-center`}>
        <SearchBar items={currentItem} ishandleOnSelected={handleOnSelected} />
      </div>

      <div className={`flex justify-center`}>
        <Paginate
          totalItems={currentItem.length}
          itemPerPage={postPerPage}
          paging={pagingNumber}
        />
      </div>

      <div className={`flex justify-center`}>
        <BoatsFilters />
      </div>

      <div className={`flex flex-col items-center md:flex-row justify-center`}>
        {showItems.length > 0 ? (
          showItems.map((el) => {
            let boats;
            el.Boat ? (boats = el.Boat) : (boats = el);
            return (
              <Card
                key={boats.id}
                id={boats.id}
                photo={boats.photo}
                name={boats.name}
                qualification={boats.Ratings[0]?.qualification}
                handleClickDetail={handleClick}
                buttonText="Ver detalles"
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Boats;
