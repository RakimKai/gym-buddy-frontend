import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api";
var token = localStorage.getItem("token") || sessionStorage.getItem("token");
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
