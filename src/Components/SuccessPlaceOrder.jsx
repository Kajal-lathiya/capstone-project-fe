import React from "react";
import styles from "./SuccessPlaceOrder.module.css";
import MyNavbar from "./MyNavbar";

const SuccessPlaceOrderPage = () => {
  return (
    <>
      <MyNavbar />
      <div className={styles.success_container}>
        <div className={styles.success_page}>
          <div className={styles.success_icon}>
            <i className="fas fa-check-circle"></i>
          </div>
          <h1 className={styles.success_h1}>Order Placed Successfully!</h1>
          <p className={styles.success_p}>
            Thank you for your purchase. Your order is being processed and will
            be shipped soon.
          </p>
          <a href="/" className={styles.success_a}>
            Continue Shopping
          </a>
        </div>
      </div>
    </>
  );
};

export default SuccessPlaceOrderPage;
