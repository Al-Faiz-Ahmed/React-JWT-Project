import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem, deleteCartItem } from "../../Redux/actions/cart-action";
import styles from "../css/cart-item.module.css";
import MessageBox from "../simple Components/MessageBox";

export default function CartItem() {
  const { cartItems } = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  function removeCartItem(e) {
    dispatch(deleteCartItem(e));
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.heading}>
          <h2>Shopping Cart</h2>
        </div>
        {cartItems.length === 0 ? (
          <MessageBox>
            
            No items in Cart To Shown.
            <br/>
            <br/>
              <Link to="/">Go for Shopping</Link>
            
          </MessageBox>
        ) : (
          <>
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
                          <select
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addCartItem(
                                  item.product_Id,
                                  Number(e.target.value)
                                )
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map(
                              (stockQty) => {
                                return (
                                  <option
                                    value={stockQty + 1}
                                    key={stockQty + 1}
                                  >
                                    {stockQty + 1}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                        <div className={styles.itemPrice}>
                          <h4>${item.price}.00</h4>
                        </div>
                      </div>
                      <div className={styles.delBtn}>
                        <button
                          title="Delete"
                          onClick={() => {
                            removeCartItem(item.product_Id);
                          }}
                        >
                          <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.fixedPosition}>
              <div className={styles.subTotal}>
                <div>
                  <div className={styles.subTotalheading}>
                    <h3>Sub Total</h3>
                  </div>
                  <div className={styles.itemsNumber}>
                    <h3>Items:</h3>
                    <p>
                      {cartItems.reduce(
                        (accumulate, currentValue) =>
                          accumulate + Number(currentValue.qty),
                        0
                      )}
                    </p>
                  </div>
                  <div className={styles.totalPrice}>
                    <h3>Price:</h3>
                    <p>
                      $
                      {cartItems.reduce(
                        (accumulate, currentValue) =>
                          accumulate + Number(currentValue.qty) * currentValue.price,
                        0
                      )}
                      .00
                    </p>
                  </div>
                  <div className={styles.checkout}>
                    <button>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
