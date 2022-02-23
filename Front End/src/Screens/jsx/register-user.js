import React from "react";
import HomeNavbar from "../../components/Navbars/homeNavbar";
import RegisterUserComp from "../../components/Forms components/RegisterUser-components";

export default function RegisterUserScreen() {
  return (
    <>
      <header>
        <HomeNavbar />
      </header>
      <main>
        <RegisterUserComp />
      </main>
    </>
  );
}
