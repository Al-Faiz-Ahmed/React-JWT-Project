import React from "react";
import "../css/productCard.css";
// import product from "../../Assets/product 1.png";
import ProductRating from "./productRating";
export default function ProductCard({ Name, Price, Rating, Reviews,ImageSource }) {
  // const product = require(`${ImageSource}`)
  return (
    <>
      <div className="parentOfCard">
        <div className="card">
          <div className="productImg">
            <img src={require(`../../Assets/${ImageSource}`)} alt={Name} />
          </div>
          <div className="productDetail">
            <div className="productName">
              <h4>{Name}</h4>
            </div>
            <div className="productRating">
              <ProductRating Rating={Rating} Reviews={Reviews} />
            </div>
            <div className="productPricing">
              <b>
                $<span>{Price}</span>.00
              </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
