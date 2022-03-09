import React, { useEffect } from "react";
import CheckoutSteps from "../simple Components/checkoutSteps";
import styles from "../css/placeOrder.module.css";
import {  useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../simple Components/loading";
import MessageBox from "../simple Components/MessageBox";
import { detailsOrder, payOrder } from "../../Redux/actions/order-actions";
import { ORDER_PAY_RESET } from "../../Redux/Constants/order-constants";
export default function OrderComponent() {
    const navigate = useNavigate();
  const orderId = useParams().id;
  const dispatch = useDispatch();
  const { orderDetails, orderPay } = useSelector((state) => state);

  const { error, loading, order } = orderDetails;
  const { success: successPay } = orderPay;
  useEffect(() => {
    if (!order || successPay || (order && orderId !== order._id)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));

    }
    
  }, [successPay, order]);

  const paymentSuccessfullHandler = () => {
    dispatch(payOrder(order));
  };
  const continueToReview = () => {
    navigate(`/profile/${orderId}`);
  };

  return loading ? (
    <LoadingSpinner />
  ) : error ? (
    <MessageBox>{error}</MessageBox>
  ) : (
    <main className={styles.main}>
      <div>
        <CheckoutSteps step1 step2 step3 step4 />
      </div>

      <h2 style={{ marginTop: "20px" }}>Order {orderId}</h2>
      <div className={styles.placeOrderContainer}>
        <div className={styles.orderInformation}>
          <div>
            <h2>Shipping</h2>
            <div>
              <h3>Name: </h3>
              {order.shippingAddress.fullName}
            </div>
            <div>
              <h3>Address: </h3>
              {order.shippingAddress.address},{order.shippingAddress.city},
              {order.shippingAddress.postalCode},{order.shippingAddress.country}
            </div>
            <div>
              {order.isDelivered ? (
                <MessageBox success>
                  Delivered at {order.deliveredAt}
                </MessageBox>
              ) : (
                <MessageBox>Not Delivered.</MessageBox>
              )}
            </div>
          </div>
          <div>
            <h2>Payment</h2>
            <div>
              <h3>Method: </h3>Paypal
            </div>
            <div>
              {order.isPaid ? (
                <MessageBox success>Paid at {order.paidAt}</MessageBox>
              ) : (
                <MessageBox>Not Paid.</MessageBox>
              )}
            </div>
          </div>
          <div>
            <h2>Order items</h2>
            {order.orderItems.map((data) => (
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
              <p>${order.itemsPrice}</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>${order.shippingPrice}</p>
            </div>
            <div>
              <p>Tax</p>
              <p>${order.taxPrice}</p>
            </div>
            <div>
              <h3>Total Order</h3>
              <h3>${order.totalPrice}</h3>
            </div>
            <div className={styles.placeOrderButton}>
              {!order.isPaid && (
                <button
                  className={styles.paypal}
                  onClick={paymentSuccessfullHandler}
                >
                  <i className="fa fa-paypal" aria-hidden="true"></i>
                  <span>PayPal</span>
                </button>
              )}
              {order.isPaid && (
                <button
                  className={styles.paypal}
                  onClick={continueToReview}
                >
                  <span>Review Product</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
