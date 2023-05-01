import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";
import styles from "./Order.module.css";
import { CHECKOUT_ACTION } from "../redux/actions/checkoutAction";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate, Link } from "react-router-dom";

function Order(props) {
  const toast = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalAmount = JSON.stringify(props.totalMoney).replace(".", "");
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Successful!",
      detail: "Your order is submitted",
      life: 2500
    });
  };
  console.log("products--->", props?.products);

  const handleToken = async (token) => {
    let userId = localStorage.getItem("CURRENT_USER");
    let userToken = localStorage.getItem("USER_TOKEN");
    const productIds = props.products.map((product) => product.productID._id);
    console.log("productIds--->", productIds);
    if (userId && userToken) {
      dispatch(CHECKOUT_ACTION(totalAmount, token, productIds))
        .then((response) => {
          console.log("response,", response);
          showSuccess();
          navigate("/SuccessPlaceOrder");
        })
        .catch((e) => {
          console.log(e);
          showFail();
        });
    } else {
      showSignInRequire();
    }
  };

  const showFail = () => {
    toast.current.show({
      severity: "error",
      summary: "Oops!!!",
      detail: "Submission fails",
      life: 2500
    });
  };

  const showSignInRequire = () => {
    toast.current.show({
      severity: "warn",
      summary: "Oops!!!",
      detail: "You have not signed in yet",
      life: 2500
    });
  };
  return (
    <div className={styles.orderContainer}>
      <Toast ref={toast} position="bottom-right" />
      <div className={styles.orderTotal}>
        Total:{" "}
        <span className={styles.orderPrice}>
          ${props.totalMoney.toFixed(2)}
        </span>
      </div>
      <StripeCheckout
        amount={totalAmount}
        token={handleToken}
        stripeKey="pk_test_51Mt7AULbhRb2c4Mq69nlSRULU5GIEngUTUe88rq55TVJvPCXUvMmX4tYqkvMnEFaK6GH40Hnh2OEumG1qXFpq4va00bDElf4HJ"
      />
    </div>
  );
}

export default Order;
