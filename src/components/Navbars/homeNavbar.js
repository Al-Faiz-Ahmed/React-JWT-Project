import React from "react";
import styles from "../css/homeNavbar.module.css";
import { Link } from "react-router-dom";
export default function HomeNavbar() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <h4>
              <Link to="/" className={`${styles.brandName} ${styles.defaultLink}`}>
                amazona
              </Link>
            </h4>
          </div>
          <div>
            <ul className="ctasBtn">
              <li>
                <Link to='/' className={styles.defaultLink}>Cart</Link>
              </li>
              <li>
                <Link to='/' className={styles.defaultLink}>Sign up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
