import React from "react";
import HomeNavbar from "../../components/Navbars/homeNavbar";
import SigninComp from "../../components/Forms components/signin-component";

export default function SigninScreen() {
  return (
    <>
      <header>
        <HomeNavbar />
      </header>
      <main>
        <SigninComp />
      </main>
    </>
  );
}