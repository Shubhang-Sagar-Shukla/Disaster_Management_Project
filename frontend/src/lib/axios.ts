import axios from "axios";

export const api = axios.create({
  baseURL: "https://disaster-management-project-1.onrender.com/api/v1/users", // adjust to your backend route
  withCredentials: true, // 👈 important for cookies / auth
});
