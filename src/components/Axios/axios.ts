import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api";

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});