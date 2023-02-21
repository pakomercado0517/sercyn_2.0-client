import React from "react";
import { useDispatch } from "react-redux";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { searchBarOnSelect, resetFilter } from "../redux/actions";

function SearchBar({ items, ishandleOnSelected }) {
  const dispatch = useDispatch();

  const handleOnSearch = (string, results) => {
    // console.log("results", results);
    // console.log("string", string);
    if (string !== "") {
      dispatch(searchBarOnSelect(results));
    } else {
      dispatch(resetFilter());
    }
  };

  const handleOnHover = (result) => {
    // console.log("result", result);
  };

  const handleOnSelect = async (item) => {
    ishandleOnSelected(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span>{item.name}</span>
      </>
    );
  };

  // console.log("items", items);
  // console.log("boatsFiltered", boatsFiltered);

  return (
    <div>
      <div className={`w-[80vw] my-3`}>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          formatResult={formatResult}
        />
      </div>
    </div>
  );
}

export default SearchBar;
