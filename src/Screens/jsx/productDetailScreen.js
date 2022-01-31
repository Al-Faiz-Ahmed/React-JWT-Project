import React from "react";
import { useParams } from "react-router-dom";
import HomeNavbar from "../../components/Navbars/homeNavbar";
import ProductScreenInfo from "../../components/products/ProductScreenInfo";

export default function PoductDetails() {
  let {id} = useParams()
  return (
    <>
      <header><HomeNavbar /></header>
      <main>
        <ProductScreenInfo giveId={id}/>
      </main>
      <footer></footer>
    </>
  );
}


