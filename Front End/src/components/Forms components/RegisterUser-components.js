import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/RegisterUser.module.css";

export default function ResgisterUserComp() {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.form}>
          <div className={styles.heading}>
            <h2>Create Account</h2>
          </div>
          <div className={styles.name}>
            <label htmlFor="name">
              <div>Name:</div>
              <div className={styles.inputDiv}>
                <input type="text" id="name" placeholder="Enter Name"/>
              </div>
            </label>
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
          <div className={styles.confirm__password}>
            <label htmlFor="confirm__password">
              <div>Confirm Password:</div>
              <div className={styles.inputDiv}>
                <input type="password" id="confirm__password" placeholder="Enter Confirm Password"/>
              </div>
            </label>
          </div>
          <div className={styles.button}>
              <button>Register</button>
          </div>
          <div className={styles.createAccount}>
              <p>Already Have account <Link to='/' >Sign in</Link></p>
          </div>
        </div>
      </main>
    </>
  );
}
