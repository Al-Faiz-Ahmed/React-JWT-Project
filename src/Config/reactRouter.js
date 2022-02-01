import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scrolltoTop/scrolltoTop";
import HomeScreen from "../Screens/jsx/homeScreen";
import PoductDetails from "../Screens/jsx/productDetailScreen";

export default () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/products/:id" element={<PoductDetails />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
};
