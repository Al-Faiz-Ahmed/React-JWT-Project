import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { product as productData } from "../../Redux/product-actions";
// import productData from "../productsData/productsData";
import styles from "../css/productScreenInfo.module.css";
import ProductRating from "./productRating";
import LoadingSpinner from "../simple Components/loading";
import MessageBox from "../simple Components/MessageBox";
export default function ProductScreenInfo() {
  // let data = productData.find((findingFromID) => findingFromID._id === giveId);

  const { product, error, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);
  // console.log(data);
  return (
    <>
      {!loading ? (
        // width:"100%",textAlign:"center"
            <div style={{ display: "flex", alignItems: "center",justifyContent:"center",marginTop:"20px"}}>
              <LoadingSpinner />
              <span style={{ marginLeft: "10px", fontSize: "20px" }}>
                Loading..
              </span>
            </div>
          
      ) : !error ? (
        <div className={styles.main}>
          <div className={styles.breadCrumbs}>
            <p>
              <span>
                <Link to="/" className={styles.link}>
                  Products
                </Link>
                <i className="fa fa-angle-right"></i>
              </span>
              <span>{product.name}</span>
            </p>
          </div>
          <div className={styles.productDetailsDiv}>
            <div className={styles.imageParentDiv}>
              <img
                src={require(`../../Assets/${product.image}`)}
                alt={product.name}
              />
            </div>
            <div className={styles.productDetails}>
              <h3>{product.name}</h3>
              <div className={styles.rating}>
                <ProductRating
                  Rating={product.rating}
                  Reviews={product.numReviews}
                  color={"gold"}
                />
              </div>
              <p className={styles.price}>Price: ${product.price}</p>
              <p className={styles.description}>
                Description: {product.description}
              </p>
            </div>
            <div className={styles.addtoCart}>
              <div>
                <div className={styles.price}>
                  <p>Price:</p>
                  <p>${product.price}</p>
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
      ) : (
        <div className={styles.main} style={{marginTop:"20px"}}>
          <div className={styles.breadCrumbs}>
            <MessageBox>{error}</MessageBox>
          </div>
        </div>
      )}
    </>
  );
}
