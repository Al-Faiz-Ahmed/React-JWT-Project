import React from "react";
import ProductCard from "./productCard";
import "../css/productCard.css";
export default function ProductRow() {
  return (
    <>
      <main>
        <div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </>
  );
}
