import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

interface OrdersProps {
  text: string;
  editText: () => void;
  deleteText: () => void;
}

const Orders: React.FC<OrdersProps> = ({ text, editText, deleteText }) => {
  return (
    <div className="order-card">
      <p>{text}</p>
      <AiTwotoneEdit onClick={editText} className="icon"></AiTwotoneEdit>
      <AiTwotoneDelete onClick={deleteText} className="icon"></AiTwotoneDelete>
    </div>
  );
};

export default Orders;
