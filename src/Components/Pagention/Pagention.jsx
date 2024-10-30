import React from "react";
import "./Pagention.css";
import { useSelector } from "react-redux";
const Pagention = () => {
    const texts = useSelector((state) => state.translation.texts);
  return (
    <div className="pagination row mt-5">
      
      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
        <div className="dataTables_info">
          <span className="pull-left">{texts.pag.span1}</span>
          <span className="pull-left">1 </span> 
          <span className="pull-left">{texts.pag.span2} </span>
          <span className="pull-left">15 </span>
          <span className="pull-left">{texts.pag.span3}</span>
          <span className="pull-left">43</span>
          <span className="pull-left">{texts.pag.span4}</span>
        </div>
      </div>
      <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
        <div
          className="dataTables_paginate paging_simple_numbers"
          id="DataTables_Table_0_paginate"
        >
          <ul className="pagination" role="navigation">
            <li
              className="page-item"
              aria-disabled="true"
              aria-label="« السابق"
            >
              <span className="page-link" aria-hidden="true">
                ‹
              </span>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="?view=list&amp;page=2">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="?view=list&amp;page=3">
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="?view=list&amp;page=2"
                rel="next"
                aria-label="التالي »"
              >
                ›
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagention;
