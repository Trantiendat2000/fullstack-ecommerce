import axiosClient from "./axiosClient";

const headers = {
  authorization: "Bearer " + localStorage.getItem("token"),
};

const HistoryAPI = {
  getHistoryAPI: (query) => {
    const url = `https://tmdt.vercel.app/histories${query}`;
    return axiosClient.get(url, { headers });
  },

  getDetail: (id) => {
    const url = `https://tmdt.vercel.app/histories/${id}`;
    return axiosClient.get(url, { headers });
  },
};

export default HistoryAPI;
