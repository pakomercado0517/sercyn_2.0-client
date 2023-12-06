import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import usePageNumbers from "./usePageNumbers";
import { currentFilterItem } from "../redux/actions";

export const useItemsPerPage = ({ getItems }) => {
  const dispatch = useDispatch();
  const itemsFiltered = useSelector((state) => state.itemsFiltered);
  const [currentPage, setCurrentPage] = useState(0);
  const [postPerPage] = useState(3);
  currentPage === 0 ? setCurrentPage(1) : currentPage;
  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentItem = itemsFiltered.length > 0 ? itemsFiltered : [];
  const pageNumbers = usePageNumbers({ currentItem, postPerPage });
  const showItems =
    currentItem.length > 0
      ? currentItem.slice(indexOfFirstItem, indexOfLastItem)
      : currentItem;

  const paging = (page) => setCurrentPage(page);

  useEffect(() => {
    dispatch(currentFilterItem(getItems));
  }, []);

  return {
    showItems,
    currentItem,
    postPerPage,
    pageNumbers,
    currentPage,
    itemsFiltered,
    setCurrentPage,
    paging,
  };
};
