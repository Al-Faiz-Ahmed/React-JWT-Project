import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/jsx/homeScreen"
import PoductDetails from "../Screens/jsx/productDetailScreen";

export default () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/products/:id" element={<PoductDetails />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </>
  );
};
