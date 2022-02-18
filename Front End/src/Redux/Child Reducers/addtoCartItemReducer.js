import { CART_ADD_ITEM, DELETE_CART_ITEM } from "../Constants/cart-constants";
export default function AddCartItemReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      // eslint-disable-next-line no-case-declarations
      const item = action.payload;
      // eslint-disable-next-line no-case-declarations
      const existItem = state.cartItems.find(
        (x) => x.product_Id === item.product_Id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((sameData) =>
            sameData.product_Id === existItem.product_Id ? item : sameData
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case DELETE_CART_ITEM:
      // eslint-disable-next-line no-case-declarations
      const itemId = action.payload;

      // eslint-disable-next-line no-case-declarations
      const deleteItem = state.cartItems.filter((x) => x.product_Id !== itemId);
      if (deleteItem) {
        return {
          ...state,
          cartItems:deleteItem
        };
       
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
}
