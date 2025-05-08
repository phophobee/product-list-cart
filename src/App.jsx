import React, { useState } from "react";
import { desserts } from "./data/desserts";
import DessertCard from "./components/DessertCard";
import Cart from "./components/Cart";
import OrderModal from "./components/OrderModal";

function App() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (item) => {
    setCart(prev => {
      const found = prev.find(i => i.id === item.id);
      if (found) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemove = (item) => {
    setCart(prev =>
      prev
        .map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)
    );
  };

  const handleDelete = (item) => {
    setCart(prev => prev.filter(i => i.id !== item.id));
  };

  const handleConfirm = () => {
    setShowModal(true);
  };

  const handleReset = () => {
    setCart([]);
    setShowModal(false);
  };

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-6 bg-cream min-h-screen">
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {desserts.map(dessert => {
          const found = cart.find(i => i.id === dessert.id);
          return (
            <DessertCard
              key={dessert.id}
              item={dessert}
              quantity={found?.quantity || 0}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
          );
        })}
      </div>
      <Cart cartItems={cart} onRemove={handleDelete} onConfirm={handleConfirm} />
      {showModal && <OrderModal cartItems={cart} total={cart.reduce((s, i) => s + i.price * i.quantity, 0)} onClose={handleReset} />}
    </div>
  );
}

export default App;
