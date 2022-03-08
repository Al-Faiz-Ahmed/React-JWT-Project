import { combineReducers } from "redux";
import AddCartItemReducer from "./Child Reducers/addtoCartItemReducer";
import { orderCreateReducer, orderDetailsReducer } from "./Child Reducers/orderReducer";
import ProductListReducer,{ProductReducer} from "./Child Reducers/productListReducer";
import {UserRegisterReducer,UserAuthReducer} from "./Child Reducers/user-auth-reducers";

export const reducers = combineReducers({
  products: ProductListReducer,
  product:ProductReducer,
  cartItem:AddCartItemReducer,
  signinUser:UserAuthReducer,
  registerUser:UserRegisterReducer,
  orderCreate:orderCreateReducer,
  orderDetails:orderDetailsReducer
});
