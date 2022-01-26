import React from "react";
import HomeScreenNavbar from "../components/Navbars/homeNavbar";
import ProductRow from "../components/products/productRow"
import "./css/homeScreen.css"
export default function HomeScreen() {
  return (
    <>
      <header>
        <HomeScreenNavbar />
      </header>
      <main>
      <ProductRow />
      </main>
      <footer></footer>
    </>
  );
}
