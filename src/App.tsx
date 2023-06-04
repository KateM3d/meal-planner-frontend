import React, { useEffect, useState } from "react";
import "./App.css";
import { addOrder, getOrders } from "./components/FetchOrders";
import Orders from "./components/Orders";

interface Order {
  _id: string;
  title: string;
  quantity: number;
  order?: any;
  setOrders: any;
}

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  const handleAddClick = () => {
    addOrder(title, setTitle, setOrders);
  };

  const handleDeleteOrder = (id: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
  };

  const handleUpdateOrder = (id: string, newTitle: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === id ? { ...order, title: newTitle } : order
      )
    );
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
      <button onClick={handleAddClick}>Order</button>

      {orders.map((order, index) => (
        <Orders
          key={index}
          order={order}
          deleteOrder={() => handleDeleteOrder(order._id)}
          updateOrder={(newTitle) => handleUpdateOrder(order._id, newTitle)}
          setOrders={setOrders}
        />
      ))}
    </div>
  );
};

export default App;
