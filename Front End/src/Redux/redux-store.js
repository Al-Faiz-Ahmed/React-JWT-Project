import React from "react";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import  persistReducer,{/* , reducers */ } from "./reducer";
import thunk from "redux-thunk";
// import {persistReducer,persistStore} from "redux-persist"
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  // cartItem: {
  //   cartItems: localStorage.getItem("cartItems")
  //     ? JSON.parse(localStorage.getItem("cartItems"))
  //     : [],
  //   shippingAddress: localStorage.getItem("shippingAddress")
  //     ? JSON.parse(localStorage.getItem("shippingAddress"))
  //     : {},
  //   paymentMethod: "",
  // },
  // signinUser: {
  //   userInfo: localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : null,
  // },
};
const store = createStore(
  persistReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
const persistor = persistStore(store)





export default function GlobalRedux({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
