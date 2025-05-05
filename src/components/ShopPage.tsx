"use client";

import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cart";
import { useState } from "react";

export default function ShopPage() {
  const { products, loading } = useProducts();
  const { addItem, items, removeItem, clearCart } = useCartStore();
  const [open, setOpen] = useState(false); // 🛒 Cart Drawer Toggle

  if (loading)
    return <div className="text-center py-10">Loading products...</div>;

  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Product Grid (Desktop) */}
      <div className="hidden lg:grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-sm rounded-xl hover:shadow-md transition"
          >
            <div className="aspect-[3/4] relative mb-4">
              <Image
                src={product.images?.[0]?.src || "/images/placeholder.png"}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-1">${product.price}</p>
            <div className="flex gap-2 mt-3">
              <Link href={`/product/${product.id}`} className="flex-1">
                <button className="w-full border border-gray-800 text-gray-800 px-4 py-2 text-sm hover:bg-gray-800 hover:text-white transition">
                  View Product
                </button>
              </Link>
              <button
                className="flex-1 bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600 transition"
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images?.[0]?.src || "",
                  })
                }
              >
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Grid (Mobile) */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-3 rounded-2xl shadow-md">
            <div className="aspect-[1/1] relative rounded-xl overflow-hidden mb-2">
              <Image
                src={product.images?.[0]?.src || "/images/placeholder.png"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600">${product.price}</p>
            <button
              className="mt-2 w-full bg-orange-500 text-white py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition"
              onClick={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.images?.[0]?.src || "",
                })
              }
            >
              + Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Drawer (used across both views) */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 text-xl"
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div className="p-4 space-y-4 overflow-y-auto max-h-[70vh]">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="w-16 h-16 relative">
                  <Image
                    src={item.image || "/images/placeholder.png"}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × ${item.price}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between mb-3 font-medium">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gray-900 text-white py-2 rounded mb-2 hover:bg-black">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-sm text-red-500 hover:underline"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
