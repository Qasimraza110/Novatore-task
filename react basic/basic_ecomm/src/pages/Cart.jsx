import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,clearCart } from "../redux/cart/cartSlice.js";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <h2 className="text-xl font-bold mb-4  ">Cart</h2>

      {cart.length === 0 ? (<p className="text-gray-600">No items in cart</p>):( <>
          <ul className="mb-4">
            {cart.map((item, i) => (
              <li key={i} className="flex justify-between items-center border-b py-2">
                 <span>
                  {item.name} - PKR {item.price}
                </span>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-2">
            Total: PKR {cart.reduce((sum, item) => sum + item.price, 0)}
          </h3>
            <button onClick={() => dispatch(clearCart())}className="bg-blue-500 text-white px-4 py-2 rounded" >Checkout</button>
        </>
      )}
    </div>
  );
}
