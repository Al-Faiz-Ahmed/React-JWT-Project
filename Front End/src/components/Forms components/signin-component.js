import React, { useState } from "react";
import { Link } from "react-router-dom";
import { user_signin } from "../../Redux/actions/user-auth-actions";
import styles from "../css/signinForm.module.css";
import AuthenticationError from "../simple Components/authenticationError";
import {useDispatch} from 'react-redux'
export default function SigninComp() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function signinUser(){
    console.log('koch koch=======')
    if(email){
      if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailError('')
      }else{
        setEmailError('Invalid Email Address.')
      }
    }else{
      setEmailError('Enter Email Address.')
    }
    if(password){
      setPasswordError('')      
    }else{
      setPasswordError('Enter Password.')
    }if(email && password){
      if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                dispatch(user_signin(email,password))

      }
    }
  }
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
                {emailError && (
                  <AuthenticationError>{emailError}</AuthenticationError>
                )}
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
                {passwordError && (
                  <AuthenticationError>
                    {passwordError}
                  </AuthenticationError>
                )}

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
            <button onClick={signinUser}>Sign in</button>
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
