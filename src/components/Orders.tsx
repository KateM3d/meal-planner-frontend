import { useState } from "react";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { editText } from "./FetchOrders";

interface Order {
  _id: string;
  title: string;
  quantity: number;
  order?: any;
  setOrders: any;
}

interface OrdersProps {
  order: Order;
  deleteOrder: () => void;
  updateOrder: (title: string) => void;
  setOrders: any;
}

const Orders: React.FC<OrdersProps> = ({
  order,
  deleteOrder,
  updateOrder,
  setOrders,
}) => {
  const [title, setTitle] = useState(order.title);
  const [editing, setEditing] = useState(false);

  const handleEditClick = (id: string) => {
    console.log(id);
    setEditing(true);
  };

  const handleSaveClick = () => {
    updateOrder(title);
    setEditing(false);
    editText(order._id, title, setTitle, setOrders, setEditing);
  };

  return (
    <div className="order-card">
      {editing ? (
        <input
          type="text"
          placeholder="Enter your order..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p>{title}</p>
      )}
      <AiTwotoneEdit
        onClick={() => handleEditClick(order._id)}
        className="icon"
      ></AiTwotoneEdit>
      <AiTwotoneDelete onClick={deleteOrder} className="icon"></AiTwotoneDelete>
      {editing && (
        <GiCheckMark onClick={handleSaveClick} className="icon"></GiCheckMark>
      )}
    </div>
  );
};

export default Orders;
