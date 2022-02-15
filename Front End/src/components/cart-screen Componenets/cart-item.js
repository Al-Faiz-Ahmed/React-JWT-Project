import React from "react";
import { useSelector } from "react-redux";
import styles from "../css/cart-item.module.css";

export default function CartItem() {
  const { cartItems } = useSelector((state) => state.cartItem);
  console.log(cartItems);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.heading}>
          <h2>Shopping Cart</h2>
        </div>
        <div className={styles.cartTable}>
          <div className={styles.table}>
            {cartItems &&
              cartItems.map((item) => (
                <div className={styles.cart} key={item.product_Id}>
                  <div className={styles.itemImage}>
                    <img
                      src={require(`../../Assets/${item.image}`)}
                      alt={item.name}
                    />
                  </div>
                  <div className={styles.itemName}>
                    <h3>{item.name}</h3>
                  </div>
                  <div className={styles.itemDetail}>
                    <div className={styles.itemQty}>
                      <select>
                        <option value="5">{item.qty}</option>
                      </select>
                    </div>
                    <div className={styles.itemPrice}>
                      <h4>${item.price}.00</h4>
                    </div>
                  </div>
                  <div className={styles.delBtn}>
                    <button title="Delete">
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.subTotal}>
            <div className={styles.totalPrice}>
                <div>
                    <div><h3>Sub Total</h3></div>
                    <div>$785</div>
                    <div><button>Checkout</button></div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
