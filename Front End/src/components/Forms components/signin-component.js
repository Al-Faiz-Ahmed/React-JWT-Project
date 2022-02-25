import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/signinForm.module.css";

export default function SigninComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <span>
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                  Email is not Valid.
                  </span>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
            </label>
          </div>
          <div className={styles.password}>
            <label htmlFor="password">
              <div>Password:</div>
              <div className={styles.inputDiv}>
                <span></span>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
            </label>
          </div>
          <div className={styles.button}>
            <button>Sign in</button>
          </div>
          <div className={styles.createAccount}>
            <p>
              New Customer? <Link to="/">Create New Account</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
