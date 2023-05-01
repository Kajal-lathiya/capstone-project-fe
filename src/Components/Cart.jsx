import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import Order from "./Order";
import { OrderList } from "primereact/orderlist";

import styles from "./Cart.module.css";
import { CARTITEMS_ACTION } from "../redux/actions/cartAction";
import MyNavbar from "./MyNavbar";

function Cart() {
  const dispatch = useDispatch();
  const cartItemsArray = useSelector((state) => state.cart.cartData.cartItems);
  const totalMoney = useSelector((state) => state.cart.cartData.totalMoney);
  useEffect(() => {
    dispatch(CARTITEMS_ACTION());
  }, []);
  const itemTemplate = (item) => {
    return (
      <CartItem
        key={item._id}
        cartItemID={item._id}
        productId={item.productID._id}
        title={item.productID.name}
        imgSrc={item.productID.mainPicture}
        category={item.productID.category}
        price={item.productID.price}
        orderQuantity={item.quantity}
      />
    );
  };

  return (
    <>
      <MyNavbar />
      <div className={styles.outerContainer}>
        {cartItemsArray && cartItemsArray.length !== 0 ? (
          <div className={styles.innerContainer}>
            <div>
              <h1>Cart Information</h1>
            </div>
            <div className={styles.cartInformation}>
              <div className={styles.cartBooks}>
                <OrderList
                  value={cartItemsArray}
                  itemTemplate={itemTemplate}
                ></OrderList>
              </div>
            </div>
            <Order products={cartItemsArray} totalMoney={totalMoney} />
          </div>
        ) : (
          <div className={styles.dataNotFound}>
            <h4>Data not found</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
