import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBoats } from "../redux/actions";
import { Pagination } from "flowbite-react";
import BoatsFilters from "../Components/boats/BoatsFilters";
import SearchBar from "../Components/filters/SearchBar";
import { useItemsPerPage } from "../Hooks/useItemsPerPage";
import ComponentList from "../Components/ComponentsList";

function Boats() {
  const dispatch = useDispatch();
  const boats = useSelector((state) => state.boats);

  const { showItems, paging, pageNumbers, currentPage, setCurrentPage } =
    useItemsPerPage({
      getItems: boats,
    });

  useEffect(() => {
    dispatch(getAllBoats());
  }, []);

  return (
    <div>
      <div className={`grid grid-cols-2 gap-3`}>
        <div className="mt-3">
          <SearchBar items={boats} setCurrentPage={setCurrentPage} />
        </div>
        <BoatsFilters />
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
        <ComponentList item={showItems} routeComponent="/boats/details" />
      </div>
    </div>
  );
}

export default Boats;
