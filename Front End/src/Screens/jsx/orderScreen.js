import React from "react";
import HomeScreenNavbar from "../../components/Navbars/homeNavbar";
import OrderComponent from "../../components/placeorder Components/OrderMain";

export default function OrderScreen() {
  return (
    <>
      <header>
        <HomeScreenNavbar />
      </header>
      <main>
        <OrderComponent />
      </main>
      <footer></footer>
    </>
  );
}
