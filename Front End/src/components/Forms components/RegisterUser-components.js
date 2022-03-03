import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user_register } from "../../Redux/actions/user-auth-actions";
import styles from "../css/RegisterUser.module.css";
import AuthenticationError from "../simple Components/authenticationError";
import { useDispatch, useSelector } from "react-redux";
import MessageBox from "../simple Components/MessageBox";

export default function ResgisterUserComp() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.signinUser);
  const { error } = useSelector((state) => state.registerUser);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  useEffect(() => {
    if (error === "Email Address already Registered.") {
      setEmailError(error);
    }
  }, [error]);

  const registerUser = (e) => {
    e.preventDefault();
    if (name) {
      setNameError("");
    } else {
      setNameError("Enter Username");
    }
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
    if (confirmPassword) {
      setConfirmPasswordError("");
    } else if (password === confirmPassword) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Password not matched.");
    }
    if (email && password && name && confirmPassword) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        if (password === confirmPassword) {
          dispatch(user_register(name, email, password));
        }
      }
    }
  };

  return (
    <>
      <main className={`${styles.main}`}>
        {error === "Request failed with status code 500" ? (
          <div className={styles.main} style={{ marginTop: "20px" }}>
            <div className={styles.breadCrumbs}>
              <MessageBox>{error}</MessageBox>
            </div>
          </div>
        ) : (
          <div>
            <form className={styles.form}>
              <div className={styles.heading}>
                <h2>Create Account</h2>
              </div>
              <div className={styles.name}>
                <label htmlFor="name">
                  <div>Name:</div>
                  <div className={styles.inputDiv}>
                    {nameError && (
                      <AuthenticationError>{nameError}</AuthenticationError>
                    )}
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </label>
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
              <div className={styles.confirm__password}>
                <label htmlFor="confirm__password">
                  <div>Confirm Password:</div>
                  <div className={styles.inputDiv}>
                    {confirmPasswordError && (
                      <AuthenticationError>
                        {confirmPasswordError}
                      </AuthenticationError>
                    )}
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
                <button onClick={registerUser}>Register</button>
              </div>
              <div className={styles.createAccount}>
                <p>
                  Already Have account <Link to="/signin">Sign in</Link>
                </p>
              </div>
            </form>
          </div>
        )}
      </main>
    </>
  );
}
