import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Evoloop Shop</h1>
      <p className="mb-6 text-lg">Find the best products at amazing prices.</p>
      <div className="flex gap-4">
        <Link  to="/products"  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700" >Shop Now </Link>
        <Link to="/cart" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700" > View Cart</Link>
      </div>
    </div>
  );
}
