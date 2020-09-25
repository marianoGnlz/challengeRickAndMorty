import React, { useState, useEffect } from "react";

import usePages from "../hooks/usePages";

type Props = {
  pages: number;
  loading: boolean;
};

const Pagination = ({ pages, loading }: Props) => {
  const [actualPages, setActualPages] = useState<JSX.Element[]>([]);
  const [nextPages, setNextPages] = useState<JSX.Element[]>([]);
  const [previousPages, setPreviousPages] = useState<JSX.Element[]>([]);
  const pagesArray = usePages([], pages);

  // const setPages = (pagesArrayInterior: JSX.Element[], previous?: boolean, next?:boolean) => {
  //   if(next){
  //     setPreviousPages([...previousPages,...actualPages])
  //   }
  //   if(previous){
  //     setNextPages([...actualPages,...nextPages])
  //     setPreviousPages(previousPages.slice(0, 10))
  //   }
  //   setActualPages(pagesArrayInterior.slice(0, 10));
  //   setNextPages(pagesArrayInterior.slice(10, pagesArrayInterior.length + 1));
  // };

  const handleNextPage = (pagesArrayInterior: JSX.Element[]) => {
    setPreviousPages([...actualPages,...previousPages])
    setActualPages(pagesArrayInterior.slice(0, 10));
    setNextPages(pagesArrayInterior.slice(10, pagesArrayInterior.length + 1));
  }

  const handlePreviousPage = (pagesArrayInterior: JSX.Element[]) => {
    setPreviousPages(pagesArrayInterior.slice(10, pagesArrayInterior.length + 1));
    setActualPages(pagesArrayInterior.slice(0, 10));
    setNextPages([...actualPages,...nextPages])
  }
  
   


  useEffect(() => {
    console.log("ola");
    if (!loading) {
      handleNextPage(pagesArray);
    }
  }, [loading]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={() => handlePreviousPage(previousPages)}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {actualPages}
        <li className={`page-item ${actualPages.length < 10? 'disabled' : null}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => handleNextPage(nextPages)}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;