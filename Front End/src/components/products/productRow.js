import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";
import styles from "../css/productCard.module.css";
import axios from "axios";
import LoadingSpinner from "../simple Components/loading";
import MessageBox from "../simple Components/MessageBox";

export default function ProductRow() {
  const [productData, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/products");
        setLoading(true);
        setProducts(data);
      } catch (error) {
        setLoading(true);
        setError(error.message);
        // console.log(error.message);
      }
    })();
  }, []);
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
            productData.map((data, index) => {
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
