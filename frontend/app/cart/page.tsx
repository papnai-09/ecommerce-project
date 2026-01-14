"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "HP Pavilion Laptop (16GB RAM, 512GB SSD)",
    image: "/products/laptop.jpg",
    price: 64999,
    quantity: 1,
  },
  {
    id: 2,
    name: "Sony Wireless Noise Cancelling Headphones",
    image: "/products/headphone.jpg",
    price: 12999,
    quantity: 2,
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const updateQty = (id: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 99 : 0;
  const total = subtotal + delivery;

  return (
    <section className="w-[93%] mx-auto mt-8 mb-20">

      {/* ===== Page Heading ===== */}
      <h1 className="text-lg font-semibold mb-6">My Cart ({cart.length})</h1>

      {cart.length === 0 ? (
        /* ===== EMPTY CART ===== */
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <Link
            href="/"
            className="text-sky-700 font-medium hover:underline"
          >
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= LEFT : CART ITEMS ================= */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="
                  bg-white border border-gray-200
                  rounded-lg p-4
                "
              >
                <div className="flex gap-4">

                  {/* Product Image */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800 mb-1">
                      {item.name}
                    </h3>

                    <p className="text-base font-semibold text-gray-900">
                      ₹{item.price.toLocaleString()}
                    </p>

                    <p className="text-xs text-green-600 mt-1">
                      ✔ In Stock
                    </p>

                    {/* Quantity & Remove */}
                    <div className="flex items-center gap-4 mt-4">
                      {/* Quantity */}
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() => updateQty(item.id, "dec")}
                          className="px-2 py-1 hover:bg-gray-100"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="px-3 text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQty(item.id, "inc")}
                          className="px-2 py-1 hover:bg-gray-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-1"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT : PRICE DETAILS ================= */}
          <div
            className="
              h-fit sticky top-24
              bg-white border border-gray-200
              rounded-lg p-5
            "
          >
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              PRICE DETAILS
            </h3>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Price ({cart.length} items)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-gray-800">
                  ₹{delivery}
                </span>
              </div>

              <div className="border-t pt-3 flex justify-between font-semibold text-gray-900">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              className="
                mt-6 w-full py-2.5
                bg-sky-600 text-white
                font-semibold rounded
                hover:bg-sky-700 transition
              "
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
