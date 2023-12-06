import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BiSearchAlt } from "react-icons/bi";
import { TextInput, Label } from "flowbite-react";
import { searchBarOnSelect } from "../../redux/actions";

function SearchBar({ items, setCurrentPage }) {
  const dispatch = useDispatch();
  const [showResults, setShowResults] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");
  const [searchName, setSearchName] = useState({});

  const handleSearch = (e) => {
    setCurrentSearch(e.target.value);
    if (currentSearch.length > 0) setShowResults(true);
  };

  const handleSearchSelect = (name) => {
    setCurrentSearch(name);
    setShowResults(false);
  };

  useEffect(() => {
    if (currentSearch.length > 0) {
      const filterName = items.filter((item) =>
        item.name.toLowerCase().includes(currentSearch.toLowerCase())
      );
      setSearchName(filterName);
      dispatch(searchBarOnSelect(filterName));
      setCurrentPage(1);
    }

    if (currentSearch.length === 0) {
      dispatch(searchBarOnSelect(items));
      setShowResults(false);
    }
  }, [items, dispatch, currentSearch]);

  return (
    <section className="relative">
      <TextInput onChange={handleSearch} name="search" id="search" />
      <span className="absolute top-3 right-3">
        <BiSearchAlt className="text-gray-400" />
      </span>
      {showResults && (
        <div className="flex flex-col gap-2 h-auto sticky rounded-md">
          {searchName.length > 0 ? (
            searchName.map((item) => (
              <Label
                key={item.id}
                onClick={() => handleSearchSelect(item.name)}
                className="border rounded-md p-1 hover:bg-[#1da2d8] hover:text-white"
              >
                {item.name}
              </Label>
            ))
          ) : (
            <Label>No se encontraron resultados</Label>
          )}
        </div>
      )}
    </section>
  );
}

export default SearchBar;
