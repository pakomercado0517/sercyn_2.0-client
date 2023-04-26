import { useDispatch, useSelector } from "react-redux";
import {
  getAllDestinations,
  getDestinationById,
  getPaging,
} from "../redux/actions";
import Paginate from "../Components/Paginate";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { useItemsPerPage } from "../Hooks/useItemsPerPage";

function Destinations() {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);
  const paging = (page) => dispatch(getPaging(page));
  const { showItems, currentItem, postPerPage } = useItemsPerPage({
    item: destinations,
    getItems: getAllDestinations,
  });

  const handleOnSelected = (item) => {
    dispatch(getDestinationById(item.id));
  };

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
      <div className={`flex flex-col items-center md:flex-row justify-evenly`}>
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
