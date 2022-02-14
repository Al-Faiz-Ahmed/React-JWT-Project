import {
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_ERROR
} from "../Constants/products-constants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/products");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
      payload: error.message,
    });
  }
};
export const product = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_REQUEST,
    payload:productId
  });
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
