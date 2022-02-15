import axios from "axios";
import { CART_ADD_ITEM } from "../Constants/cart-constants";

export const addCartItem = (productId,qty) => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            product_Id:data._id,
            qty
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cartItem.cartItems))
}
    
