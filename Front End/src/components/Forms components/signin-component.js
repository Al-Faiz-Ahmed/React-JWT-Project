import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/signinForm.module.css";

export default function SigninComp() {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.form}>
          <div className={styles.heading}>
            <h2>Sign in</h2>
          </div>
          <div className={styles.email}>
            <label htmlFor="email">
              <div>Email:</div>
              <div className={styles.inputDiv}>
                <input type="email" id="email" placeholder="Enter Email"/>
              </div>
            </label>
          </div>
          <div className={styles.password}>
            <label htmlFor="password">
              <div>Password:</div>
              <div className={styles.inputDiv}>
                <input type="password" id="password" placeholder="Enter Password"/>
              </div>
            </label>
          </div>
          <div className={styles.button}>
              <button>Sign in</button>
          </div>
          <div className={styles.createAccount}>
              <p>New Customer? <Link to='/' >Create New Account</Link></p>
          </div>
        </div>
      </main>
    </>
  );
}
