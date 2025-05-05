"use client";

import { useCartStore } from "@/store/cart";
import { useState } from "react";
import Image from "next/image";

export default function CartDrawer() {
  const { items, removeItem, clearCart } = useCartStore();
  const [open, setOpen] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg z-50 lg:hidden"
      >
        🛒 Cart ({items.length})
      </button>

      {/* Drawer */}
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
          <div className="p-4 space-y-4 overflow-y-auto max-h-[80vh]">
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

        {/* Footer */}
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
    </>
  );
}
