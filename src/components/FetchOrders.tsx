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
    return;
  }

  axios.post(`${baseUrl}/saveMeal`, { title: title }).then((data) => {
    setTitle("");
    getOrders(setOrders);
  });
};

const editText = (
  id: string,
  title: string,
  setTitle: any,
  setOrder: any,
  setEdditing: any
) => {
  axios
    .put(`${baseUrl}/editMeal`, {
      _id: "64416a9dc87346e9c838e029",
      title: title,
    })
    .then((data) => {
      console.log(data);
      setEdditing(false);
      setTitle(title);
      console.log(id, title);

      getOrders(setOrder);
    });
};
export { getOrders, addOrder, editText };
