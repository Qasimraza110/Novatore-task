import React from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice.js";  

export default function Products() {
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24px">
        {products.map((p) => (
          <div key={p.id} className="border rounded-xl p-4 shadow hover:shadow-lg">
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="text-gray-600">PKR {p.price}</p>
            <button onClick={() => dispatch(addToCart(p))} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"> Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
