import React from "react";
import CheckoutSteps from "../simple Components/checkoutSteps";
import styles from "../css/placeOrder.module.css";

export default function PlaceOrderCom() {
  return (
    <main className={styles.main}>
      <div>
        <CheckoutSteps step1 step2 step3 step4 />
      </div>
      <div className={styles.productDetailsDiv}>
        <div className={styles.imageParentDiv}>faizan</div>

        <div className={styles.addtoCart}>
          <div>
            <div className={styles.price}>
              <p>Price:</p>
              <p>100$</p>
            </div>
            <div className={styles.stock}>
              <p>Status:</p>
              <p>In Stock</p>
            </div>
          </div>

          <div className={styles.addtoCartbutton}>
            <button onClick={null}>Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}
