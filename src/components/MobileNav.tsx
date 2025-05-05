"use client";

import { useCartStore } from "@/store/cart";

export default function MobileNav({
  onCartClick,
}: {
  onCartClick?: () => void;
}) {
  const { items } = useCartStore();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6 flex justify-around text-center z-50">
      {[
        { label: "Home", icon: "🏠", href: "/" },
        { label: "Menu", icon: "📋", href: "/menu" },
        {
          label: "Cart",
          icon: "👜",
          onClick: onCartClick,
          badge: items.length,
        },
        { label: "Like", icon: "❤️", href: "/wishlist" },
      ].map((item) => (
        <button
          key={item.label}
          onClick={item.onClick}
          className="flex flex-col items-center text-sm text-gray-600 relative"
        >
          <span className="text-xl">{item.icon}</span>
          {item.badge > 0 && (
            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              {item.badge}
            </span>
          )}
          <span className="mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
