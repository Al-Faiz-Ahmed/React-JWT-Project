import Axios from "axios";
import { CART_EMPTY } from "../Constants/cart-constants";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAILED,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_FAILED,
  ORDER_DETAIL_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAILED,
  ORDER_PAY_SUCCESS,
} from "../Constants/order-constants";

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_CREATE_REQUEST,
    payload: order,
  });
  try {
    const {
      signinUser: { userInfo },
    } = getState();
    const { data } = await Axios.post("/api/orders", order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data.order,
    });
    dispatch({
      type: CART_EMPTY,
    });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_DETAIL_REQUEST,
  });
  try {
    const {
      signinUser: { userInfo },
    } = getState();
    const { data } = await Axios.get(`/api/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type:ORDER_DETAIL_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: ORDER_DETAIL_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const payOrder = (order) => async (dispatch,getState) => {
  dispatch({
    type:ORDER_PAY_REQUEST,
  })
  const {
    signinUser: { userInfo },
  } = getState();
  try{
    console.log(order._id,'hello ID')
    const {data} = await Axios.put(`/api/orders/${order._id}/pay`,'hell',{
      headers:{
        Authorization: `Bearer ${userInfo.token}`
      }
    })
    dispatch({
      type:ORDER_PAY_SUCCESS,
      payload:data
    })
  }catch(error){
    dispatch({
      type: ORDER_PAY_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }

}