import React from "react";
import PaymentMethodForm from "../../components/Forms components/PaymentMethod-component";
import HomeNavbar from "../../components/Navbars/homeNavbar";

export default function PaymentScreen() {
  return (
    <>
      <header>
        <HomeNavbar />
      </header>
      <main>
        <PaymentMethodForm />
      </main>
      <footer></footer>
    </>
  );
}
