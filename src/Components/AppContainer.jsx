import React from "react";
import styles from "./AppContainer.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import BookDetail from "./BookDetail";
import BookSearchResults from "./BookSearchResults";
import Cart from "./Cart";

import InfoPage from "./InfoPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import AddProductForm from "./AddProductForm";
import ProductsMainPage from "./ProductsMainPage"

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

          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            exact
            path="/bookstore/books_search/:searchTitle"
            element={<BookSearchResults />}
          />
          <Route path="/bookstore/book/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppContainer;
