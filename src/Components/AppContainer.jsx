import React from "react";
import NavBar from "./NavBar";
import styles from "./AppContainer.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Bookstore from "./Bookstore";
import Contact from "./Contact";
import BookDetail from "./BookDetail";
import BookSearchResults from "./BookSearchResults";
import Cart from "./Cart";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AdminSignIn from "./AdminSignIn";
import AdminOrders from "./AdminOrders";
// import MyNavbar from "./MyNavbar";
import InfoPage from "./InfoPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

function AppContainer() {
  return (
    <BrowserRouter>
      <div className={styles.outerContainer}>
        {/* <NavBar /> */}
        {/* <MyNavbar /> */}
        <Routes>
          <Route element={<Home />} path="/" />
          {/* <Route path="/user/signin" element={<SignIn />} /> */}
          {/* <Route path="/user/signup" element={<SignUp />} /> */}
          
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/bookstore/page" element={<Bookstore />} />
          <Route path="/admin/signin" element={<AdminSignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/info" element={<InfoPage />} />
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
