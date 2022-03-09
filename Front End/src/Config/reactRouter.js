import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scrolltoTop/scrolltoTop";
import HomeScreen from "../Screens/jsx/homeScreen";
import OrderHistoryScreen from "../Screens/jsx/orderHistoryScreen";
import OrderScreen from "../Screens/jsx/orderScreen";
import PaymentScreen from "../Screens/jsx/paymentScreen";
import PlaceOrderScreen from "../Screens/jsx/placeOrderScreen";
import ProductCartScreen from "../Screens/jsx/productCartScreen";
import PoductDetails from "../Screens/jsx/productDetailScreen";
import RegisterUserScreen from "../Screens/jsx/register-user";
import ShippingScreen from "../Screens/jsx/shippingScreen";
import SigninScreen from "../Screens/jsx/signinScreen";


const ReactRouter = () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/cart" element={<ProductCartScreen />} />
            <Route path="/cart/:id" element={<ProductCartScreen />} />
            <Route path="/products/:id" element={<PoductDetails />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/orderhistory" element={<OrderHistoryScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/register" element={<RegisterUserScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<HomeScreen />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}
export default ReactRouter