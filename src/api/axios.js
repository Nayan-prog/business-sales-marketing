import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  console.log("========== AXIOS ==========");
  console.log("Request URL:", config.url);
  console.log("Token:", token);

  if (
    token &&
    !config.url.includes("login") &&
    !config.url.includes("register")
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("Headers:", config.headers);
  console.log("===========================");

  return config;
});

export default api;