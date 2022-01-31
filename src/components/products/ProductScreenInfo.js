import React from "react";
import { Link } from "react-router-dom";
import productData from "../productsData/productsData";
import styles from "../css/productScreenInfo.module.css";
export default function ProductScreenInfo({ giveId }) {
  let data = productData.find((findingFromID) => findingFromID._id === giveId);
  console.log(data);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.breadCrumbs}>
          <p>
            <span>
              <Link to="/" className={styles.link}>Products </Link>
              <i className="fa fa-angle-right" ></i>
            </span>
            <span>{data.name}</span>
          </p>
        </div>
        <div className={styles.productDetailsDiv}>
          <div className="imageParentDiv">
            <img src={require(`../../Assets/${data.image}`)} alt={data.name} />
          </div>
          <div className="productDetails"></div>
          <div className="addtoCart"></div>
        </div>
      </div>
    </>
  );
}
