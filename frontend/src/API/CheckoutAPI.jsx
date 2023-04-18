import axiosClient from "./axiosClient";

const headers = {
  authorization: "Bearer " + localStorage.getItem("token"),
};

const CheckoutAPI = {
  postEmail: (data) => {
    const url = `https://tmdt.vercel.app/email`;
    return axiosClient.post(url, JSON.stringify(data), { headers });
  },
};

export default CheckoutAPI;
