import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from "../redux/cart/cartSlice.js";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">No items in cart</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Product</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Total</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, i) => (
                  <tr key={i} className="text-center">
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">PKR {item.price}</td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex items-center justify-center">
                        <button  className="bg-gray-300 px-2 rounded mx-1" onClick={() => dispatch(decreaseQuantity(item.id))} >-</button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button className="bg-gray-300 px-2 rounded mx-1"  onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">
                      PKR {item.price * item.quantity}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button onClick={() => dispatch(removeFromCart(item.id))}  className="bg-red-500 text-white px-2 py-1 rounded"  >  Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold mb-2 mt-4">
            Total: PKR {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </h3>
          <button  onClick={() => dispatch(clearCart())} className="bg-blue-500 text-white px-4 py-2 rounded">  Checkout
          </button>
        </>
      )}
    </div>
  );
}
