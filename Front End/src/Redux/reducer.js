import { combineReducers } from "redux";
import AddCartItemReducer from "./Child Reducers/addtoCartItemReducer";
import { orderCreateReducer, orderDetailsReducer, orderMineReducer, orderPayReducer } from "./Child Reducers/orderReducer";
import {ProductReducer,productListReducer,productReviewReducer} from "./Child Reducers/productListReducer";
import {UserRegisterReducer,UserAuthReducer, UserProfileUpdateReducer} from "./Child Reducers/user-auth-reducers";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: 'root',
  storage: storage,
}

const cartItemPersistConfig = {
  key: 'cartItems',
  storage: storage,
}
const userInfoPersistConfig = {
  key: 'userInfo',
  storage: storage,
}


export const reducers = combineReducers({
  products: productListReducer,
  product:ProductReducer,
  cartItem:persistReducer(cartItemPersistConfig,AddCartItemReducer),
  signinUser:persistReducer(userInfoPersistConfig,UserAuthReducer),
  registerUser:UserRegisterReducer,
  orderCreate:orderCreateReducer,
  orderDetails:orderDetailsReducer,
  orderPay:orderPayReducer,
  orderMine:orderMineReducer,
  productReview:productReviewReducer,
  profileUpdate:UserProfileUpdateReducer,
});
export default persistReducer(rootPersistConfig,reducers)