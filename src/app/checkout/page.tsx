"use client";

import { useCartStore } from "@/lib/store/cart";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();

  const [billing, setBilling] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address_1: "",
    city: "",
    country: "MU",
  });

  const [customNote, setCustomNote] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("home");
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const deliveryCost = (() => {
    if (subtotal >= 1500) return 0;
    switch (deliveryMethod) {
      case "home":
        return 150;
      case "post":
        return 70;
      case "express":
        return 100;
      default:
        return 0;
    }
  })();

  const placeOrder = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          billing,
          items,
          paymentMethod,
          meta: {
            delivery_method: deliveryMethod,
            delivery_date: deliveryDate,
            custom_note: customNote,
          },
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        clearCart();
      } else {
        alert("Order failed: " + data.message);
      }
    } catch (err) {
      alert("An error occurred while placing the order.");
    }
    setLoading(false);
  };

  const isCODAllowed = deliveryMethod === "home" || deliveryMethod === "pickup";

  if (success) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-700">
          We’ll contact you soon with delivery info.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      {/* Billing Info */}
      {Object.entries(billing).map(([key, val]) => (
        <input
          key={key}
          type="text"
          placeholder={key.replace("_", " ")}
          value={val}
          onChange={(e) =>
            setBilling((prev) => ({ ...prev, [key]: e.target.value }))
          }
          className="w-full border px-4 py-2 rounded text-sm"
        />
      ))}

      {/* Custom Note */}
      <textarea
        placeholder="Custom note for your order"
        value={customNote}
        onChange={(e) => setCustomNote(e.target.value)}
        className="w-full border px-4 py-2 rounded text-sm"
      />

      {/* Delivery Method */}
      <div>
        <p className="font-medium mb-2">
          How would you like to receive your order?
        </p>
        {[
          {
            id: "home",
            label: "Home/Office Delivery (Free > Rs1500, else Rs150)",
          },
          { id: "post", label: "Postage (Free > Rs1500, else Rs70)" },
          { id: "express", label: "Express Postage (Rs100)" },
          { id: "pickup", label: "Pickup at Pereybere (Free)" },
        ].map((opt) => (
          <label key={opt.id} className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              name="delivery"
              value={opt.id}
              checked={deliveryMethod === opt.id}
              onChange={() => setDeliveryMethod(opt.id)}
            />
            {opt.label}
          </label>
        ))}
      </div>

      {/* Delivery Date Picker for Home Delivery */}
      {deliveryMethod === "home" && (
        <div>
          <p className="text-sm text-gray-600 mb-1">Select Delivery Date</p>
          <DatePicker
            selected={deliveryDate}
            onChange={(date) => setDeliveryDate(date)}
            minDate={new Date()}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
      )}

      {/* Payment Method */}
      <div>
        <p className="font-medium mb-2">Payment Method:</p>
        <label className="flex items-center gap-2 mb-1">
          <input
            type="radio"
            name="payment"
            value="cod"
            disabled={!isCODAllowed}
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Cash on Delivery
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="bank"
            checked={paymentMethod === "bank"}
            onChange={() => setPaymentMethod("bank")}
          />
          Juice / Bank Transfer
        </label>
      </div>

      {/* Summary */}
      <div className="border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Delivery</span>
          <span>{deliveryCost === 0 ? "Free" : `Rs ${deliveryCost}`}</span>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>Rs {(subtotal + deliveryCost).toFixed(2)}</span>
        </div>
        <button
          onClick={placeOrder}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded mt-4"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
