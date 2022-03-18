import React, { useState,  } from "react";
import { userProfileUpdate } from "../../Redux/actions/user-auth-actions";
import styles from "../css/RegisterUser.module.css";
import AuthenticationError from "../simple Components/authenticationError";
import { useDispatch, useSelector } from "react-redux";
import MessageBox from "../simple Components/MessageBox";
import LoadingSpinner from "../simple Components/loading";

export default function Userprofilecomponent() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.signinUser);
  const { error,loading } = useSelector((state) => state.profileUpdate);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [confirmPasswordError, setConfirmPasswordError] = useState("");

  

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
   
    if (email && password && name && confirmPassword) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          
        console.log("1")
          dispatch(userProfileUpdate(name, email, password,confirmPassword));
        
      }
    }
    else if (email && password && name) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          console.log("2")
          dispatch(userProfileUpdate(name, email, password));
        
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
                <h2>User Profile</h2>
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
                      autoComplete="old-address"
                    />
                  </div>
                </label>
              </div>
              <div className={styles.confirm__password}>
                <label htmlFor="confirm__password">
                  <div>New Password (Optional):</div>
                  <div className={styles.inputDiv}>
                   
                    <input
                      type="password"
                      id="confirm__password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Enter New Password"
                      autoComplete="new-address"
                    />
                  </div>
                </label>
              </div>
              <div className={styles.button}>
                {
                  loading ?
                  <button><LoadingSpinner/></button>
                  : 
                  <button onClick={registerUser}>Update</button>
                }
              </div>
             
            </form>
          </div>
        )}
      </main>
    </>
  );
}
