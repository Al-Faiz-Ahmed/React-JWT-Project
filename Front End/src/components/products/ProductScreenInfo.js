import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { product } from "../../Redux/actions/product-actions";
// import productData from "../productsData/productsData";
import styles from "../css/productScreenInfo.module.css";
import ProductRating from "./productRating";
import LoadingSpinner from "../simple Components/loading";
import MessageBox from "../simple Components/MessageBox";
import { useNavigate } from "react-router-dom";
export default function ProductScreenInfo(props) {
  const { productData, error, loading } = useSelector((state) => state.product);
  const navigate = useNavigate()
  const [qty,setQty] = useState(1)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(product(props.giveId));
  }, [dispatch, props.giveId]);
  


  function addToCartHandler(){
   navigate(`/cart/${props.giveId}?qty=${qty}`)
  }

  return (
    <>
      {!loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
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
              <span>{productData.name}</span>
            </p>
          </div>
          <div className={styles.productDetailsDiv}>
            <div className={styles.imageParentDiv}>
              <img
                src={require(`../../Assets/${productData.image}`)}
                alt={productData.name}
              />
            </div>
            <div className={styles.productDetails}>
              <h3>{productData.name}</h3>
              <div className={styles.rating}>
                <ProductRating
                  Rating={productData.rating}
                  Reviews={productData.numReviews}
                  color={"gold"}
                />
              </div>
              <p className={styles.price}>Price: ${productData.price}</p>
              <p className={styles.description}>
                Description: {productData.description}
              </p>
            </div>
            <div className={styles.addtoCart}>
              <div>
                <div className={styles.price}>
                  <p>Price:</p>
                  <p>${productData.price}</p>
                </div>
                <div className={styles.stock}>
                  <p>Status:</p>
                  {productData.countInStock > 0 ? (
                    <p>In Stock</p>
                  ) : (
                    <p style={{ color: "#FF5454" }}>Unavailable</p>
                  )}
                </div>

                {productData.countInStock > 0 && (
                  <div className={styles.price}>
                    <p>Qty:</p>

                    <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                      {[...Array(productData.countInStock).keys()].map(
                        (stockQty) => {
                          return (
                            <option value={stockQty + 1} key={stockQty + 1}>
                              {stockQty + 1}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                )}
              </div>
              {productData.countInStock > 0 && (
                <div className={styles.addtoCartbutton}>
                  <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.main} style={{ marginTop: "20px" }}>
          <div className={styles.breadCrumbs}>
            <MessageBox>{error}</MessageBox>
          </div>
        </div>
      )}
    </>
  );
}
