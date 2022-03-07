import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../css/shippingForm.module.css";
import CheckoutSteps from "../simple Components/checkoutSteps";
import AuthenticationError from "../simple Components/authenticationError";
import { saveShippingAddress } from "../../Redux/actions/cart-action";
import { useNavigate } from "react-router-dom";
import MessageBox from "../simple Components/MessageBox";
export default function ShipppingForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, error } = useSelector((state) => state.signinUser);
  const { shippingAddress } = useSelector((state) => state.cartItem);
  const { cartItems } = useSelector((state) => state.cartItem);

  const [fullName, setFullName] = useState(shippingAddress.fullName ? shippingAddress.fullName : '');
  const [address, setAddress] = useState(shippingAddress?.address ? shippingAddress?.address : '');
  const [city, setCity] = useState(shippingAddress?.city ? shippingAddress?.city : '');
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode ? shippingAddress?.postalCode : '');
  const [country, setCountry] = useState(shippingAddress?.country ? shippingAddress?.country : '');

  const [fullNameErr, setFullNameErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [postalCodeErr, setPostalCodeErr] = useState("");
  const [countryErr, setCountryErr] = useState("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    } else if (cartItems.length === 0) {
      navigate("/");
    }
  }, [userInfo]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (fullName) {
      setFullNameErr("");
    } else {
      setFullNameErr("Enter Full Name");
    }
    if (address) {
      setAddressErr("");
    } else {
      setAddressErr("Enter Address");
    }
    if (city) {
      setCityErr("");
    } else {
      setCityErr("Enter City");
    }
    if (postalCode) {
      setPostalCodeErr("");
    } else {
      setPostalCodeErr("Enter Postal Code");
    }
    if (country) {
      setCountryErr("");
    } else {
      setCountryErr("Enter Country");
    }
    if (fullName && address && city && postalCode && country) {
      dispatch(
        saveShippingAddress({ fullName, address, city, postalCode, country })
      );
      navigate("/payment");
    }
  };
  return (
    <main className={styles.main}>
      {error === "Request failed with status code 500" ? (
        <div className={styles.main} style={{ marginTop: "20px" }}>
          <div className={styles.breadCrumbs}>
            <MessageBox>{error}</MessageBox>
          </div>
        </div>
      ) : (
        <>
          <CheckoutSteps step1 step2/>
          <div className={styles.formStarting}>
            <form className={styles.form}>
              <div className={styles.heading}>
                <h2>Shipping Address</h2>
              </div>
              <div className={styles.fullname}>
                <label htmlFor="fullname">
                  <div>Full Name:</div>
                  <div className={styles.inputDiv}>
                    {fullNameErr && (
                      <AuthenticationError>{fullNameErr}</AuthenticationError>
                    )}
                    <input
                      autoComplete="fullName"
                      type="text"
                      id="fullname"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter Full Name"
                    />
                  </div>
                </label>
              </div>
              <div className={styles.address}>
                <label htmlFor="address">
                  <div>Address:</div>
                  <div className={styles.inputDiv}>
                    {addressErr && (
                      <AuthenticationError>{addressErr}</AuthenticationError>
                    )}
                    <input
                      autoComplete="address"
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter Address"
                    />
                  </div>
                </label>
              </div>
              <div className={styles.city}>
                <label htmlFor="city">
                  <div>City:</div>
                  <div className={styles.inputDiv}>
                    {cityErr && (
                      <AuthenticationError>{cityErr}</AuthenticationError>
                    )}
                    <input
                      autoComplete="city"
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter City"
                    />
                  </div>
                </label>
              </div>
              <div className={styles.postalCode}>
                <label htmlFor="postalCode">
                  <div>Postal Code:</div>
                  <div className={styles.inputDiv}>
                    {postalCodeErr && (
                      <AuthenticationError>{postalCodeErr}</AuthenticationError>
                    )}
                    <input
                      autoComplete="postal code"
                      type="text"
                      id="postalCode"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="Enter Postal Code"
                    />
                  </div>
                </label>
              </div>
              <div className={styles.country}>
                <label htmlFor="country">
                  <div>Country:</div>
                  <div className={styles.inputDiv}>
                    {countryErr && (
                      <AuthenticationError>{countryErr}</AuthenticationError>
                    )}
                    <input
                      autoComplete="country"
                      type="text"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Enter Country"
                    />
                  </div>
                </label>
              </div>
              <div className={styles.button}>
                <button onClick={submitHandler}>Continue</button>
              </div>
            </form>
          </div>
        </>
      )}
    </main>
  );
}
