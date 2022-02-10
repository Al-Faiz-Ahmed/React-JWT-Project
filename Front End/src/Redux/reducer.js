import { combineReducers } from "redux";
import ProductListReducer,{ProductReducer} from "./productListReducer";

// export default function reducer(state = globaLData, action) {
//   switch (action.type) {
//       case "LOAD_PRODUCTS":{
//           return{
//               ...state,
//               products:action.payload,
//           }
//       }
//     default:
//       return state;
//   }
// }
export const reducers = combineReducers({
  products: ProductListReducer,
  product:ProductReducer
});
