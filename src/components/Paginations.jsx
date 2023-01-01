import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { useContext } from "react";

import { CharactersContext } from "../contexts/charactersContext";

export const Paginations = () => {
  const { totalResult, pages, actualPage, prevPage, nextPage, goToPage } =
    useContext(CharactersContext);
  return (
    <>
      <div className="col-3 d-flex align-items-center">
        <b>Total results: </b>
        {totalResult}
      </div>
      <div className="col-3 d-flex align-items-center">
        <b>Page:</b> {actualPage} of {pages}
      </div>
      <div className="col-3 d-flex align-items-center">
        <b>Go to page:</b>
        <select
          name="goTo"
          className="form-select w-auto mx-2"
          value={actualPage}
          data-type="goTo"
          onChange={(e) => goToPage(actualPage, e)}
        >
          {Array.from(Array(pages).keys()).map((page) => {
            return (
              <option key={page + 1} value={page + 1}>
                {page + 1}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-3 d-flex align-items-center">
        {prevPage && (
          <button
            className="btn btn-success m-2 pb-2 pt-1"
            data-type="prev"
            onClick={(e) => goToPage(prevPage, e)}
          >
            {<GoArrowLeft />}
          </button>
        )}
        {nextPage && (
          <button
            className="btn btn-success m-2 pb-2 pt-1"
            data-type="next"
            onClick={(e) => goToPage(nextPage, e)}
          >
            {<GoArrowRight />}
          </button>
        )}
      </div>
    </>
  );
};
