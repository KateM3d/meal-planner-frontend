import React, { useEffect, useState } from "react";
import "./App.css";
import { addOrder, getOrders } from "./components/FetchOrders";
import Orders from "./components/Orders";

interface Order {
  id: number;
  title: string;
  quantity: number;
}

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  const handleEdit = () => {
    // Do something when edit is clicked
  };

  const handleDelete = () => {
    // Do something when delete is clicked
  };

  return (
    <div className="order-container">
      <h1>Cheesecake Ordering Tool</h1>
      <input
        type="text"
        placeholder="Enter your order..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => addOrder(title, setTitle, setOrders)}>
        Order
      </button>

      {orders.map((order, index) => (
        <Orders
          key={index}
          text={order.title}
          editText={handleEdit}
          deleteText={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
