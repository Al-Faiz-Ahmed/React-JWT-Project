import React, { useState } from "react";
import { Link } from "react-router-dom";
import { user_register } from "../../Redux/actions/user-auth-actions";
import styles from "../css/signinForm.module.css";
import AuthenticationError from "../simple Components/authenticationError";
// import { useDispatch, useSelector } from "react-redux";

export default function ResgisterUserComp() {
  // const { userInfo } = useSelector((state) => state.registerUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  return (
    <>
      <main className={`${styles.main}`}>
        <div>
          <form className={styles.form}>
            <div className={styles.heading}>
              <h2>Create Account</h2>
            </div>
            <div className={styles.name}>

              <label htmlFor="name">
                <div>Name:</div>
                <div className={styles.inputDiv}>
                  <input type="text" id="name" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
              </label>
            </div>
            <div className={styles.email}>
            {emailError && (
                    <AuthenticationError>{emailError}</AuthenticationError>
                  )}
              <label htmlFor="email">
                <div>Email:</div>
                <div className={styles.inputDiv}>
                <input
                    autoComplete="email"
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
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    autoComplete="current-password"
                  />
                </div>
              </label>
            </div>
            <div className={styles.confirm__password}>
              <label htmlFor="confirm__password">
                <div>Confirm Password:</div>
                <div className={styles.inputDiv}>
                <input
                    type="password"
                    id="confirm__password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter Password"
                    autoComplete="current-password"
                  />
                </div>
              </label>
            </div>
            <div className={styles.button}>
              <button>Register</button>
            </div>
            <div className={styles.createAccount}>
              <p>
                Already Have account <Link to="/">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

/* 
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user_signin } from "../../Redux/actions/user-auth-actions";
import styles from "../css/signinForm.module.css";
import AuthenticationError from "../simple Components/authenticationError";
import { useDispatch, useSelector } from "react-redux";

export default function SigninComp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.signinUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);
  function signinUser(e) {
    e.preventDefault();
    if (email) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError("");
      } else {
        setEmailError("Invalid Email Address.");
      }
    } else {
      setEmailError("Enter Email Address.");
    }
    if (password) {
      setPasswordError("");
    } else {
      setPasswordError("Enter Password.");
    }
    if (email && password) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        dispatch(user_signin(email, password));
      }
    }
  }
  return (
    <>
      <main className={`${styles.main}`}>
        <div>
          <form className={styles.form}>
            <div className={styles.heading}>
              <h2>Sign in</h2>
            </div>
            <div className={styles.email}>
              <label htmlFor="email">
                <div>Email:</div>

                <div className={styles.inputDiv}>
                  {emailError && (
                    <AuthenticationError>{emailError}</AuthenticationError>
                  )}
                  <input
                    autoComplete="email"
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
                  {passwordError && (
                    <AuthenticationError>{passwordError}</AuthenticationError>
                  )}

                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    autoComplete="current-password"
                  />
                </div>
              </label>
            </div>
            <div className={styles.button}>
              <button onClick={signinUser}>Sign in</button>
            </div>
            <div className={styles.createAccount}>
              <p>
                New Customer? <Link to="/">Create New Account</Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
 */
