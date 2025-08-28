import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-2xl font-bold">Evoloop Shop </h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/products" className="hover:text-yellow-400">Products</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart </Link>
        {cart.length > 0 && (
          <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
            {cart.length} </span>
        )}
        
      </div>
    </nav>
  );
}
