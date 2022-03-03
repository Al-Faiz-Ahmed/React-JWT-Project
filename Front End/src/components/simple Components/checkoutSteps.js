import React from "react";
import styles from "../css/checkout.module.css";

export default function CheckoutSteps(props) {
  return (
    <div className={styles.progress}>
      <div className={props.step1 ? styles.done : styles.pending}>Sign in</div>
      <div className={props.step2 ? styles.done : styles.pending}>Shipping</div>
      <div className={props.step3 ? styles.done : styles.pending}>Payment</div>
      <div className={props.step4 ? styles.done : styles.pending}>Place Order</div>
    </div>
  );
}
