import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import { encryptTransform } from "redux-persist-transform-encrypt";
import cartReducer from "../reducers/cartReducer";
import checkoutReducer from "../reducers/checkoutReducer";
import userReducer from "../reducers/userReducer";
import adminReducer from "../reducers/adminReducer";

const persistConfig = {
  key: "root",
  storage: localStorage
  //   transforms: [
  //     encryptTransform({
  //       secretKey: process.env.REACT_APP_SECRET_KEY
  //     })
  //   ]
};

const bigReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  admin:adminReducer
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
