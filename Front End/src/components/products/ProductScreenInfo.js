import React from "react";
import { Link } from "react-router-dom";
import productData from "../productsData/productsData";
import styles from "../css/productScreenInfo.module.css";
import ProductRating from "./productRating";
export default function ProductScreenInfo({ giveId }) {
  let data = productData.find((findingFromID) => findingFromID._id === giveId);
  console.log(data);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.breadCrumbs}>
          <p>
            <span>
              <Link to="/" className={styles.link}>
                Products{" "}
              </Link>
              <i className="fa fa-angle-right"></i>
            </span>
            <span>{data.name}</span>
          </p>
        </div>
        <div className={styles.productDetailsDiv}>
          <div className={styles.imageParentDiv}>
            <img src={require(`../../Assets/${data.image}`)} alt={data.name} />
          </div>
          <div className={styles.productDetails}>
            <h3>{data.name}</h3>
            <div className={styles.rating}>
              <ProductRating
                Rating={data.rating}
                Reviews={data.numReviews}
                color={"gold"}
              />
            </div>
            <p className={styles.price}>Price: ${data.price}</p>
            <p className={styles.description}>
              Description: {data.description}
            </p>
          </div>
          <div className={styles.addtoCart}>
            <div>
              <div className={styles.price}>
                <p>Price:</p>
                <p>${data.price}</p>
              </div>
              <div className={styles.stock}>
                <p>Status:</p>
                <p>In Stock</p>
              </div>
            </div>
            <div className={styles.addtoCartbutton}>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
