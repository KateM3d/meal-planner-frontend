import axios from "axios";

interface Order {
  id: number;
  name: string;
  title: string;
  quantity: number;
}
const baseUrl = "http://localhost:4001";

const getOrders = (setOrder: any) => {
  axios.get<Order[]>(baseUrl).then(({ data }) => {
    console.log(data);
    setOrder(data);
  });
};

const addOrder = (title: string, setTitle: any, setOrders: any) => {
  if (!title) {
    console.log("no title");
    return;
  }

  axios.post(`${baseUrl}/saveMeal`, { title: title }).then((data) => {
    console.log(data);
    setTitle("");
    getOrders(setOrders);
  });
};
export { getOrders, addOrder };
