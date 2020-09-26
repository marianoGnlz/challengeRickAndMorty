import React from "react";


const usePages = (
  arrayPages: JSX.Element[],
  pages: number,
  actualPage: number,
  setActualPage: Function
) => {
  if (!pages) return [];
  const liPages = () => {
    for (let index = 0; index < pages; index++) {
      arrayPages.push(
        actualPage !== index + 1 ? (
          <li key={index + 1} className="page-item">
            <a
              className="page-link"
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                setActualPage(index + 1);
              }}
            >
              {index + 1}
            </a>
          </li>
        ) : (
          <li key={index + 1} className="page-item active" aria-current="page">
            <a
              className="page-link"
              href="/#"
            >
              {index + 1}
              <span className="sr-only">(current)</span>
            </a>
          </li>
        )
      );
    }
    return arrayPages;
  };
  const array: JSX.Element[] = liPages();
  return array;
};

export default usePages;