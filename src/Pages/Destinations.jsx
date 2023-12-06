import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDestinations,
  getDestinationById,
  getPaging,
} from "../redux/actions";
import { Pagination } from "flowbite-react";
import { useItemsPerPage } from "../Hooks/useItemsPerPage";
import ComponentList from "../Components/ComponentsList";
import SearchBar from "../Components/filters/SearchBar";

function Destinations() {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);
  const { showItems, paging, pageNumbers, currentPage, setCurrentPage } =
    useItemsPerPage({
      getItems: destinations,
    });
  const handleOnSelected = (item) => {
    dispatch(getDestinationById(item.id));
  };

  useEffect(() => {
    dispatch(getAllDestinations());
  }, []);

  return (
    <div>
      <div className={`grid grid-cols-2 gap-3`}>
        {/* <div className="mt-3">
          <SearchBar items={destinations} setCurrentPage={setCurrentPage} />
        </div> */}
        {/* <DestinationsFilters /> */}
      </div>

      <div className={`flex justify-center`}>
        <Pagination
          showIcons
          totalPages={pageNumbers.length}
          currentPage={currentPage}
          onPageChange={paging}
        />
      </div>

      <div className="mt-4">
        <ComponentList item={showItems} routeComponent="" />
      </div>
    </div>
  );
}

export default Destinations;
