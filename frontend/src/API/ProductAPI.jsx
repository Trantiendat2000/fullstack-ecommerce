import axiosClient from "./axiosClient";

const ProductAPI = {
  getAPI: () => {
    const url = "https://tmdt.vercel.app/products";
    return axiosClient.get(url);
  },

  getCategory: (query) => {
    const url = `/products/category${query}`;
    return axiosClient.get(url);
  },

  getDetail: (id) => {
    const url = `https://tmdt.vercel.app/products/${id}`;
    return axiosClient.get(url);
  },

  getPagination: (query) => {
    const url = `https://tmdt.vercel.app/products/pagination${query}`;
    return axiosClient.get(url);
  },
};

export default ProductAPI;
