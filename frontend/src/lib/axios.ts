import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:7000/api/v1/users", // adjust to your backend route
  withCredentials: true, // 👈 important for cookies / auth
});
