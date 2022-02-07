import React from "react";
import styles from "../css/productCard.module.css";
import ProductRating from "./productRating";

import { Link } from "react-router-dom";

export default function ProductCard({
  Name,
  Price,
  Rating,
  Reviews,
  ImageSource,
  UniqueID
}) {
  return (
    <>
      <div className={styles.parentOfCard}>
        <div className={styles.card}>
          <Link to={`/products/${UniqueID}`} style={{textDecoration:"none"}}>
            <div className={styles.productImg}>
              <img src={require(`../../Assets/${ImageSource}`)} alt={Name} />
            </div>
            <div className={styles.productDetail}>
              <div className={styles.productName}>
                <h4>{Name}</h4>
              </div>
              <div className={styles.productRating}>
                <ProductRating Rating={Rating} Reviews={Reviews} />
              </div>
              <div className={styles.productPricing}>
                <b>
                  $<span>{Price}</span>.00
                </b>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
