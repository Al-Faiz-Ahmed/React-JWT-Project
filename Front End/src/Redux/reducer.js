import { combineReducers } from "redux";
import ProductListReducer,{ProductReducer} from "./productListReducer";

export const reducers = combineReducers({
  products: ProductListReducer,
  product:ProductReducer
});
