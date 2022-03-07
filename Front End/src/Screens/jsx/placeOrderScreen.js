import React from "react";
import HomeScreenNavbar from "../../components/Navbars/homeNavbar";
import PlaceOrderCom from "../../components/placeorder Components/placeorderMain";

export default function PlaceOrderScreen() {
  return (
    <>
      <header>
        <HomeScreenNavbar />
      </header>
      <main>
      <PlaceOrderCom />
      </main>
      <footer></footer>
    </>
  );
}
