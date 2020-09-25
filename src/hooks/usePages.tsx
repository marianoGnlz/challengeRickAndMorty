import React from "react";



const usePages = (arrayPages:JSX.Element[],pages:number) => {
  if (!pages) return [];
  const liPages = () => {
    for (let index = 0; index < pages; index++) {
      arrayPages.push(
        <li key={index + 1} className="page-item">
          <a className="page-link" href="#">
            {index + 1}
          </a>
        </li>
      );
    }
    return arrayPages;
  };
  const array:JSX.Element[] = liPages()
  console.log(array)
  return array;
};

export default usePages;