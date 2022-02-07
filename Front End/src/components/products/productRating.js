import React from "react";

export default function ProductRating({ Rating,Reviews,color }) {
  return (
    <>
      <span style={{color:color === 'gold' ? 'gold' : '#fbfbfb'}}>
        <i
          className={
            Rating >= 1
              ? "fa fa-star"
              : Rating >= 0.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
          aria-hidden="true"
        ></i>
      </span>
      <span style={{color:color === 'gold' ? 'gold' : '#fbfbfb'}}>
        <i className={
            Rating >= 2
            ? "fa fa-star"
            : Rating >= 1.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        } aria-hidden="true"></i>
      </span>
      <span style={{color:color === 'gold' ? 'gold' : '#fbfbfb'}}>
        <i className={
            Rating >= 3
            ? "fa fa-star"
            : Rating >= 2.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        } aria-hidden="true"></i>
      </span>
      <span style={{color:color === 'gold' ? 'gold' : '#fbfbfb'}}>
        <i className={
            Rating >= 4
            ? "fa fa-star"
            : Rating >= 3.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        } aria-hidden="true"></i>
      </span>
      <span style={{color:color === 'gold' ? 'gold' : '#fbfbfb'}}>
        <i className={
            Rating >= 5
            ? "fa fa-star"
            : Rating >= 4.5
            ? "fa fa-star-half-o"
            : "fa fa-star-o"
        } aria-hidden="true"></i>
      </span>
      <span style={{color:color === 'gold' ? '#20283a' : 'gold',marginLeft:"10px"}}>{Reviews} reviews</span>
    </>
  );
}
