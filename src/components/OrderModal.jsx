import React from "react";

export default function OrderModal({ cartItems, total, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
        <img src="/images/icon-order-confirmed.svg" alt="confirm" />
        <h2 className="text-xl font-bold mb-4 font-redhatbold">Order Confirmed</h2>
        <ul className="text-left space-y-2 mb-4 max-h-64 overflow-y-auto pr-2">
          {cartItems.map(item => (
            <li key={item.id}>
              <div className="flex p-3 bg-rose-50 rounded-[15px] flex-row gap-4 items-center" >
              <img src={`./images/${item.image_thumb}`} alt={item.name} className="rounded-[15px] h-12 w-12 object-cover"/>
              <div className="flex flex-col w-full">
                <p className="font-extrabold">{item.name}</p>
                <div className="flex gap-4"><span className="text-orange-400 font-bold">{item.quantity}x</span>
                <span className="text-gray-500">@ {(item.price).toFixed(2)} </span>
                <span className="ml-auto font-bold">${(item.price * item.quantity).toFixed(2)}</span></div>
              </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex mb-4 w-full">
          <span className="text-gray-500 text-sm">Order Total</span>
          <span className="ml-auto font-bold text-xl">Total: ${total.toFixed(2)}</span>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 w-full rounded-[20px]" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
