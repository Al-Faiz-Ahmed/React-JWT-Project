import { combineReducers } from "redux";
import AddCartItemReducer from "./Child Reducers/addtoCartItemReducer";
import { orderCreateReducer, orderDetailsReducer, orderMineReducer, orderPayReducer } from "./Child Reducers/orderReducer";
import {ProductReducer,productListReducer,productReviewReducer} from "./Child Reducers/productListReducer";
import {UserRegisterReducer,UserAuthReducer, UserProfileUpdateReducer} from "./Child Reducers/user-auth-reducers";

export const reducers = combineReducers({
  products: productListReducer,
  product:ProductReducer,
  cartItem:AddCartItemReducer,
  signinUser:UserAuthReducer,
  registerUser:UserRegisterReducer,
  orderCreate:orderCreateReducer,
  orderDetails:orderDetailsReducer,
  orderPay:orderPayReducer,
  orderMine:orderMineReducer,
  productReview:productReviewReducer,
  profileUpdate:UserProfileUpdateReducer,
});
