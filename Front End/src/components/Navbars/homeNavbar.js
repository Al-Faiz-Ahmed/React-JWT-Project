import React from "react";
import styles from "../css/homeNavbar.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { user_signout } from "../../Redux/actions/user-auth-actions";

export default function HomeNavbar() {
  const dispatch = useDispatch();
  let { cartItems } = useSelector((state) => state.cartItem);
  let { userInfo } = useSelector((state) => state.signinUser);

  const signOutUser = () => {
    dispatch(user_signout());
  };
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
                <li className={styles.nameLink}>
                  {userInfo.name.slice(0, 5)}...
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                  <ul className={styles.dropdownContent}>
                    <li>
                      <Link to="#" onClick={signOutUser}>
                        Sign out
                      </Link>
                    </li>
                    <li>
                      <Link to="/orderhistory" onClick={null}>
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" onClick={null}>
                        profile
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li>
                  <Link to="/signin" className={styles.defaultLink}>
                    Sign in
                  </Link>
                </li>
              )}
              {userInfo.isAdmin && (
                <li>
                  <Link to="#" className={styles.defaultLink}>
                    Admin
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
