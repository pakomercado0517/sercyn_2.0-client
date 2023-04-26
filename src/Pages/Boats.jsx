import { useDispatch, useSelector } from "react-redux";
import { getAllBoats, getBoatById, getPaging } from "../redux/actions";
import Paginate from "../Components/Paginate";
import BoatsFilters from "../Components/BoatsFilters";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import { useItemsPerPage } from "../Hooks/useItemsPerPage";

function Boats() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const $boats = useSelector((state) => state.boats);
  const pagingNumber = (page) => dispatch(getPaging(page));
  const { showItems, currentItem, postPerPage } = useItemsPerPage({
    item: $boats,
    getItems: getAllBoats,
  });

  const handleClickDetail = async (id) => {
    await dispatch(getBoatById(id));
    navigate("/boats/details");
  };

  const handleOnSelected = (item) => {
    dispatch(getBoatById(item.id));
    navigate("/boats/details");
  };

  return (
    <div>
      <div className={`flex justify-center items-center`}>
        <SearchBar items={currentItem} ishandleOnSelected={handleOnSelected} />
        <BoatsFilters />
      </div>

      <div className={`flex justify-center`}>
        <Paginate
          totalItems={currentItem.length}
          itemPerPage={postPerPage}
          paging={pagingNumber}
        />
      </div>

      <div className={`flex justify-center`}></div>

      <div className={`flex flex-col justify-evenly items-center md:flex-row`}>
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
                handleClickDetail={handleClickDetail}
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
