import axios from "axios";
const backend = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const api = axios.create({ baseURL: backend });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers = { Authorization: `Bearer ${token}` };
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("success:", response.status);
    return response;
  },
  (error) => {
    console.log("error:", error.response.status);
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
