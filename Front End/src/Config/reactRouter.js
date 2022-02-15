import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scrolltoTop/scrolltoTop";
import HomeScreen from "../Screens/jsx/homeScreen";
import ProductCartScreen from "../Screens/jsx/productCartScreen";
import PoductDetails from "../Screens/jsx/productDetailScreen";


const ReactRouter = () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/cart" element={<ProductCartScreen />} />
            <Route path="/cart/:id" element={<ProductCartScreen />} />
            <Route path="/products/:id" element={<PoductDetails />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<HomeScreen />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}
export default ReactRouter