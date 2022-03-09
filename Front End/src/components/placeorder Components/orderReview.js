import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsOrder } from "../../Redux/actions/order-actions";
import { productReview } from "../../Redux/Child Reducers/productListReducer";
import LoadingSpinner from "../simple Components/loading";
import MessageBox from "../simple Components/MessageBox";

export default function OrderReview() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [setReview]=useState("")
  const {  order,loading, error } = useSelector(
    (state) => state.orderDetails
  );
  useEffect(() => {
    dispatch(detailsOrder(id));
  }, []);
  function submitReview(productID){
    dispatch(productReview(productID,setReview))
  }
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : 
        order.orderItems.map((order)=>(
            <div key={order.product_Id}>
                <img src={require(`../../Assets/${order.image}`)} width="150" alt="" />    
                <h2>{order.name}</h2>
                <p>price ${order.price}</p>
                <input type="text" onChange={(e)=>setReview(e.target.value)} />
                <button onClick={()=>{submitReview(order.product_Id)}}>review now</button>
            </div>
        ))
      }
    </>
  );
}
