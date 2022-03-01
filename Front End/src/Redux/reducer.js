import { combineReducers } from "redux";
import AddCartItemReducer from "./Child Reducers/addtoCartItemReducer";
import ProductListReducer,{ProductReducer} from "./Child Reducers/productListReducer";
import UserAuthReducer from "./Child Reducers/user-auth-reducers";

export const reducers = combineReducers({
  products: ProductListReducer,
  product:ProductReducer,
  cartItem:AddCartItemReducer,
  signinUser:UserAuthReducer
});
