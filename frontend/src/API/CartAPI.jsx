import axiosClient from "./axiosClient";

const headers = {
  authorization: "Bearer " + localStorage.getItem("token"),
};

const CartAPI = {
  getCarts: (query) => {
    const url = `https://tmdt.vercel.app/carts${query}`;
    return axiosClient.get(url, { headers });
  },

  postAddToCart: (data) => {
    const url = `https://tmdt.vercel.app/addToCart`;
    return axiosClient.post(url, JSON.stringify(data), { headers });
  },

  deleteToCart: (query) => {
    const url = `https://tmdt.vercel.app/cart-delete-item`;
    return axiosClient.post(url, JSON.stringify(query), { headers });
  },

  putToCart: (query) => {
    const url = `https://tmdt.vercel.app/updateCart`;
    return axiosClient.put(url, JSON.stringify(query), { headers });
  },
};

export default CartAPI;
