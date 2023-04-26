import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useItemsPerPage = ({ item, getItems }) => {
  const dispatch = useDispatch();
  const itemsFiltered = useSelector((state) => state.itemsFiltered);

  const page = useSelector((state) => state.page);
  const currentPage = page === 0 ? 1 : page;
  const [postPerPage] = useState(3);
  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentItem = itemsFiltered.length > 0 ? itemsFiltered : item;
  const showItems =
    currentItem.length > 0
      ? currentItem.slice(indexOfFirstItem, indexOfLastItem)
      : currentItem;

  useEffect(() => {
    dispatch(getItems);
  }, [dispatch]);

  return { showItems, currentItem, postPerPage };
};
