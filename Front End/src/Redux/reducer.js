import { combineReducers } from "redux";
import AddCartItemReducer from "./Child Reducers/addtoCartItemReducer";
import ProductListReducer,{ProductReducer} from "./Child Reducers/productListReducer";

export const reducers = combineReducers({
  products: ProductListReducer,
  product:ProductReducer,
  cartItem:AddCartItemReducer
});
