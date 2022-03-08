import React, { useEffect } from "react";
import CheckoutSteps from "../simple Components/checkoutSteps";
import styles from "../css/placeOrder.module.css";
import { useNavigate } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import { createOrder } from "../../Redux/actions/order-actions";
import { ORDER_CREATE_RESET } from "../../Redux/Constants/order-constants";
import LoadingSpinner from "../simple Components/loading";
export default function PlaceOrderCom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItem,orderCreate } = useSelector((state) => state);
  const { shippingAddress, paymentMethod, cartItems } = cartItem;
  const {success,order,loading} = orderCreate
  useEffect(() => {
    if (!paymentMethod) {
      navigate("/payment");
    }
  }, []);
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({type:ORDER_CREATE_RESET})
    }
  }, [success,order,loading]);

  const toPrice = (num) => Number(num.toFixed(2));
  cartItem.itemsPrice = toPrice(
    cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
    cartItem.shippingPrice = cartItem.itemsPrice > 100 ? toPrice(0) : toPrice(10)
    cartItem.taxPrice = toPrice(0.15 * cartItem.itemsPrice)
    cartItem.totalPrice = cartItem.itemsPrice + cartItem.shippingPrice + cartItem.taxPrice 
    const placeOrderHandler = () =>{
      dispatch(createOrder({...cartItem,orderItems:cartItems}))
    }
  return (
    <main className={styles.main}>
      <div>
        <CheckoutSteps step1 step2 step3 step4 />
      </div>
      {
        loading && <LoadingSpinner />
      }
      <div className={styles.placeOrderContainer}>
        <div className={styles.orderInformation}>
          <div>
            <h2>Shipping</h2>
            <div>
              <h3>Name: </h3>
              {shippingAddress.fullName}
            </div>
            <div>
              <h3>Address: </h3>
              {shippingAddress.address},{shippingAddress.city},
              {shippingAddress.postalCode},{shippingAddress.country}
            </div>
          </div>
          <div>
            <h2>Payment</h2>
            <div>
              <h3>Method: </h3>Paypal
            </div>
          </div>
          <div>
            <h2>Order items</h2>
            {cartItems.map((data) => (
              <div key={data.name}>
                <img
                  src={require(`../../Assets/${data.image}`)}
                  alt={data.name}
                />
                <p>{data.name}</p>
                <p>
                  <span>{data.qty}</span> x <span>${data.price}</span> ={" "}
                  <span>${data.price * data.qty}</span>
                </p>
              </div>
            ))}
          </div>
          <div className={styles.extraHeight}></div>
        </div>
        <div className={styles.placeOrder}>
          <div>
            <h2>Order Summary</h2>
            <div>
              <p>Items</p>
              <p>${cartItem.itemsPrice}.00</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>${cartItem.shippingPrice}.00</p>
            </div>
            <div>
              <p>Tax</p>
              <p>${cartItem.taxPrice}.00</p>
            </div>
            <div>
              <h3>Total Order</h3>
              <h3>${cartItem.totalPrice}.00</h3>
            </div>
            <div className={styles.placeOrderButton}>
              <button onClick={placeOrderHandler}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
