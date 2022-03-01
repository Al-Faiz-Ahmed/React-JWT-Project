import React from "react";
import styles from "../css/homeNavbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomeNavbar() {
  let { cartItems } = useSelector((state) => state.cartItem);
  let { userInfo } = useSelector((state) => state.signinUser);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <h4>
              <Link
                to="/"
                className={`${styles.brandName} ${styles.defaultLink}`}
              >
                amazona
              </Link>
            </h4>
          </div>
          <div>
            <ul className="ctasBtn">
              <li>
                <Link to="/cart" className={styles.defaultLink}>
                  Cart
                  {cartItems.length > 0 && (
                    <span className={styles.badge}>{cartItems.length}</span>
                  )}
                </Link>
              </li>
              {userInfo ? (
                <li>
                  <Link to="#" className={styles.defaultLink}>
                    {userInfo.name.slice(0, 5)}...
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/signin" className={styles.defaultLink}>
                    Sign in
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
