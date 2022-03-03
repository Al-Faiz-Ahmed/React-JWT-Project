import React, { useEffect, useState } from "react";
import CheckoutSteps from "../simple Components/checkoutSteps";
import styles from "../css/paymentForm.module.css";
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../Redux/actions/cart-action";
export default function PaymentMethodForm() {
  const  dispatch = useDispatch()
  const { shippingAddress } = useSelector((state) => state.cartItem);
  const  navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  useEffect(()=>{
    console.log("helo")
    if(!shippingAddress.address){
      navigate("/shipping")
    }
  },[])
  const submitHandler = e => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate("/placeorder")
  }
  return (
    <main className={styles.main}>
      <CheckoutSteps step1 step2 step3 />
      <div className={styles.formStarting}>
        <form className={styles.form}>
          <div className={styles.heading}>
            <h2>Payment Method</h2>
          </div>
          <div className={styles.paypal}>
            <label htmlFor="paypal">
              <div className={styles.inputDiv}>
                <input
                  checked
                  autoComplete="paypal"
                  value="paypal"
                  type="radio"
                  id="paypal"
                  name="payment"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <p>PayPal</p>
              </div>
            </label>
          </div>
          <div className={styles.stripe}>
            <label htmlFor="stripe">
              <div className={styles.inputDiv}>
                <input
                  autoComplete="stripe"
                  type="radio"
                  id="stripe"
                  name="payment"
                  value="stripe"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <p>Stripe</p>
              </div>
            </label>
          </div>
          <div className={styles.button}>
            <button onClick={submitHandler}>Continue</button>
          </div>
        </form>
      </div>
    </main>
  );
}
