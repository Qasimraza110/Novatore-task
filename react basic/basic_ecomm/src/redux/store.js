import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return undefined;
    }
    return { cart: { items: JSON.parse(serializedCart) } };
  } catch (e) {
    return undefined;
  }
};

const saveCart = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
  } catch (e) {
  }
};

const preloadedState = loadCart();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveCart(store.getState());
});
