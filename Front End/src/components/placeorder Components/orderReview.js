import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsOrder } from "../../Redux/actions/order-actions";
import { productReview } from "../../Redux/actions/product-actions";

import LoadingSpinner from "../simple Components/loading";
import MessageBox from "../simple Components/MessageBox";

export default function OrderReview() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [review, setReview] = useState({});
  const { order, loading, error } = useSelector((state) => state.orderDetails);
  const { success/* , loading:savingReview, error:reviewError  */} = useSelector((state) => state.productReview);
  useEffect(() => {
    dispatch(detailsOrder(id));
  }, []);
  useEffect(() => {    
  }, [order,success]);

  function submitReview(productID) {
    if (review[productID]) {
      dispatch(productReview(productID, review[productID], id));
    }
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        order.orderItems.map((order) => (
          <div key={order.product_Id}>
            <img
              src={require(`../../Assets/${order.image}`)}
              width="150"
            />
            <h2>{order.name}</h2>
            <p>price ${order.price}</p>
            {order.review ? (
              <p>Your Review {order.review}</p>
            ) : (
              <>
                <input
                  type="text"
                  value={
                    review[order.product_Id] ? review[order.product_Id] : ""
                  }
                  onChange={(e) =>
                    setReview({ ...review, [order.product_Id]: e.target.value })
                  }
                />
                <button
                  onClick={() => {
                    submitReview(order.product_Id);
                  }}
                >
                  review now
                </button>
              </>
            )}
          </div>
        ))
      )}
    </>
  );
}
