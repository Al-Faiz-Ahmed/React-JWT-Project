import React from "react";
import Userprofilecomponent from "../../components/Forms components/Userprofilecomponent";
import HomeNavbar from "../../components/Navbars/homeNavbar";

export default function UserProfileScreen() {
  return (
    <>
      <header>
        <HomeNavbar />
      </header>
      <main>
        <Userprofilecomponent />
      </main>
    </>
  );
}
