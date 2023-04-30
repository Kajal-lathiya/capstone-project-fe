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
  const loader = useSelector((state) => state.cart.cartItemsLoading);
  const cartItemsArray = useSelector((state) => state.cart.cartData.cartItems);
  const totalMoney = useSelector((state) => state.cart.cartData.totalMoney);

  useEffect(() => {
    dispatch(CARTITEMS_ACTION());
  }, []);
console.log('totalMoney--->', totalMoney);
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
        {!loader && (
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
        )}
      </div>
    </>
  );
}

export default Cart;
