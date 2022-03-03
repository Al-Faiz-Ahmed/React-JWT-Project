import axios from "axios";
import { CART_ADD_ITEM, DELETE_CART_ITEM,CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from "../Constants/cart-constants";

export const addCartItem = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product_Id: data._id,
      qty,
    },
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartItem.cartItems)
  );
};

export const deleteCartItem = (product_Id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_CART_ITEM,
    payload: product_Id,
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartItem.cartItems)
  );
};

export const saveShippingAddress =
  (data) => (dispatch) => {
    dispatch({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:data
    })
    localStorage.setItem("shippingAddress",JSON.stringify(data))
  };
export const savePaymentMethod = paymentMethod => dispatch => {
  dispatch({
    type:CART_SAVE_PAYMENT_METHOD,
    paylaod:paymentMethod
  })
}