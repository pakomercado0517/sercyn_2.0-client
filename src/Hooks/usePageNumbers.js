export default function usePageNumbers({ currentItem, postPerPage }) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(currentItem.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}
