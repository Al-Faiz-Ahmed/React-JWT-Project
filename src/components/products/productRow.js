import React from "react";
import ProductCard from "./productCard";
import styles from "../css/productCard.module.css";
import productData from "../productsData/productsData";
export default function ProductRow() {
  return (
    <>
      <main className={styles.main}>
        <div>
          {productData.map((data, index) => {
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
            )
          })}
        </div>
      </main>
    </>
  );
}
