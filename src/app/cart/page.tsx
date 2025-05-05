"use client";

import { useCartStore } from "@/lib/store/cart";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, clearCart, updateQuantity } = useCartStore();
  const [confirmId, setConfirmId] = useState<number | null>(null);
  const [promo, setPromo] = useState("");

  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const delivery = 25;
  const discount = 35;
  const total = subtotal + delivery - discount;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl lg:text-3xl font-bold mb-6">My Cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 border-b pb-4"
              >
                <div className="w-20 h-20 relative rounded overflow-hidden">
                  <Image
                    src={item.image || "/images/placeholder.png"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>

                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center rounded bg-gray-200"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center rounded bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => setConfirmId(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          {/* Remove Confirmation */}
          {confirmId !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 w-[90%] max-w-sm text-center">
                <p className="text-lg font-semibold mb-3">Remove from Cart?</p>
                <div className="flex justify-center gap-4">
                  <button
                    className="px-4 py-2 rounded bg-gray-200"
                    onClick={() => setConfirmId(null)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-red-500 text-white"
                    onClick={() => {
                      removeItem(confirmId);
                      setConfirmId(null);
                    }}
                  >
                    Yes, Remove
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Promo + Totals */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-6 lg:hidden z-40">
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Promo Code"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                className="flex-1 border rounded-l px-4 py-2 text-sm"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-r text-sm">
                Apply
              </button>
            </div>
            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <div className="flex justify-between">
                <span>Sub-Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-[#5f3f2b] text-white py-3 rounded text-center font-medium">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
