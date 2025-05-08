import React from "react";

export default function OrderModal({ cartItems, total, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Order Confirmed</h2>
        <ul className="text-left space-y-2 mb-4">
          {cartItems.map(item => (
            <li key={item.id}>{item.name} x{item.quantity} — ${(item.price * item.quantity).toFixed(2)}</li>
          ))}
        </ul>
        <div className="font-bold mb-4">Total: ${total.toFixed(2)}</div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
