import Axios from "axios";
import {
  USER_PROFILE_UPDATE_FAILED,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNOUT,
} from "../Constants/signin-constants";
export const user_signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  });
  try {
    let { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const user_register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });
  try {
    let { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const user_signout = () => async (dispatch) => {
  localStorage.removeItem("persist:root");
  localStorage.removeItem("persist:cartItems");
  localStorage.removeItem("persist:userInfo");
  dispatch({ type: USER_SIGNOUT });
};

export const userProfileUpdate =
  (username, email, password, newPassword) => async (dispatch, getState) => {
    if (username && email && password && newPassword) {
      const {
        signinUser: { userInfo },
      } = getState();
      dispatch({
        type: USER_PROFILE_UPDATE_REQUEST,
      });
      try {
        const { data } = await Axios.put(
          `/api/users/${userInfo._id}`,
          { username, email, password, newPassword },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        dispatch({
          type: USER_PROFILE_UPDATE_SUCCESS,
        });
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: USER_PROFILE_UPDATE_FAILED,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    } else if (username && email && password) {
      const {
        signinUser: { userInfo },
      } = getState();
      dispatch({
        type: USER_PROFILE_UPDATE_REQUEST,
      });
      try {
        const { data } = await Axios.put(
          `/api/users/${userInfo._id}`,
          { username, email, password },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        dispatch({
          type: USER_PROFILE_UPDATE_SUCCESS,
        });
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: data,
        });

      } catch (error) {
        dispatch({
          type: USER_PROFILE_UPDATE_FAILED,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    }
  };
