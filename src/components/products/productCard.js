import React from "react";
import "../css/productCard.css";
export default function ProductCard() {
  return (
    <>
    <div className="parentOfCard">
        <div className="card">
            <div className="productImg"></div>
            <div className="productName"></div>
            <div className="productRating"></div>
            <div className="productPricing"></div>
        </div>
    </div>
    </>
  );
}
