import React, { useEffect } from "react";
import styles from "../css/orderHistory.module.css";
import { useSelector,useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import LoadingSpinner from "../simple Components/loading";
import MessageBox from "../simple Components/MessageBox";
import { listOrderMine } from "../../Redux/actions/order-actions";
export default function OrderHistoryMain() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const { orderMine } = useSelector((state) => state);
  const { loading, error, orders } = orderMine;

  useEffect(()=>{
    dispatch(listOrderMine())
  },[])
  return (
    <main className={styles.main}>
      <h2>Order History</h2>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : orders.length === 0 ? 
      <MessageBox>No Orders History</MessageBox> :
      (
        <div className={styles.tableContainer}>
          <div className={styles.tableRow}>
            <div className={styles.head}>
              <div>
                <h3>ID</h3>
                <h3>DATE</h3>
              </div>
              <div>
                <h3>TOTAL</h3>
                <h3>PAID</h3>
                <h3>DELIVERED</h3>
              </div>
              <div>
                <h3>ACTIONS</h3>
              </div>
            </div>
            {orders.map((order) => (
              <div key={order._id} className={styles.body}>
                <div className={styles.orderIDandDate}>
                  <p className={styles.orderId}>{order._id}</p>
                  <p className={styles.orderDate}>{order.createdAt.split("T")[0]}</p>
                </div>
                <div className={styles.priceandDelivery}>
                  <p className={styles.orderPrice}>${order.totalPrice}</p>
                  <p className={styles.orderPaidAt}>{order.isPaid ? order.paidAt.split("T")[0]: "Not Paid"}</p>
                  <p className={styles.orderDeliverAt}>{order.isDelivered ? order.deliveredAt : "Not Delivered"}</p>
                </div>
                <div className={styles.actions}>
                  <button onClick={()=>{navigate(`/order/${order._id}`)}}>Details</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.tableBody}></div>
        </div>
      )}
    </main>
  );
}
