import React from "react";
import HomeScreenNavbar from "../../components/Navbars/homeNavbar";
import OrderHistoryMain from "../../components/placeorder Components/orderHistoryMain";

export default function OrderHistoryScreen() {
  return (
    <>
      <header>
        <HomeScreenNavbar />
      </header>
      <main>
    <OrderHistoryMain />
      </main>
      <footer></footer>
    </>
  );
}
