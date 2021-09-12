import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/Order/order-slice";
import cartReducer from "../features/ShopingCart/shopping-cart-slice";
import menuReducer from "../features/Admin/pages/Menu/menu-slide";

const rootReducer = {
  order: orderReducer,
  cart: cartReducer,
  menu: menuReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
