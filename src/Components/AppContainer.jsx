import React from "react";
import styles from "./AppContainer.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Cart from "./Cart";

import InfoPage from "./InfoPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import AddProductForm from "./AddProductForm";
import ProductsMainPage from "./ProductsMainPage";
import ProductDetailPage from "./ProductDetailPage";
import SuccessPlaceOrderPage from './SuccessPlaceOrder';

function AppContainer() {
  return (
    <BrowserRouter>
      <div className={styles.outerContainer}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/product/add" element={<AddProductForm />} />
          <Route path="/products" element={<ProductsMainPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/SuccessPlaceOrder" element={<SuccessPlaceOrderPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppContainer;
