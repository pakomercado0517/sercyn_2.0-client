import React from "react";

function Paginate({ totalItems, itemPerPage, paging }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.length > 1 &&
        pageNumbers.map((el, index) => {
          return (
            <button
              className={`w-12 h-8 bg-blue-500 text-white border border-white`}
              key={index}
              onClick={() => paging(el)}
            >
              {el}
            </button>
          );
        })}
    </div>
  );
}

export default Paginate;
