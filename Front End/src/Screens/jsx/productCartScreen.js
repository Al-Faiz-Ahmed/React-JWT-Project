import React, { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/actions/cart-action";

export default function ProductCartScreen() {
  const [searchQuery] = useSearchParams();
  const qty = searchQuery.get("qty");
  const { id } = useParams();
  let dispatch = useDispatch()

  useEffect(() => {
    if(id){
      dispatch(addCartItem(id,qty))
    }
  }, [dispatch,id,qty]);
  return (
    <>
      <div>stock qty {qty}</div>
      <div>id {id}</div>
    </>
  );
}
