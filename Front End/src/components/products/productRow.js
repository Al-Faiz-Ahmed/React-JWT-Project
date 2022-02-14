import React, {useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import ProductCard from "./productCard";
import styles from "../css/productCard.module.css";
import LoadingSpinner from "../simple Components/loading";
import MessageBox from "../simple Components/MessageBox";
import { listProducts } from "../../Redux/actions/product-actions";

export default function ProductRow() {
  const {productsData,error,loading} = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  return (
    <>
      <main className={styles.main}>
        <div>
          {!loading ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <LoadingSpinner />
              <span style={{ marginLeft: "10px", fontSize: "20px" }}>
                Loading..
              </span>
            </div>
          ) : !error ? (
            productsData.map((data, index) => {
              return (
                <ProductCard
                  key={data._id + index}
                  Name={data.name}
                  Category={data.category}
                  ImageSource={data.image}
                  BrandName={data.brand}
                  Rating={data.rating}
                  Reviews={data.numReviews}
                  Price={data.price}
                  Description={data.description}
                  UniqueID={data._id}
                />
              );
            })
          ) : (
            <MessageBox>{error}</MessageBox>
          )}
        </div>
      </main>
    </>
  );
}
