import axios from "axios";

const API = axios.create({ baseURL: "https://archive-api.onrender.com" });

//archive-api.onrender.com/api/product/upload/file

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).data.token
    }`;
  }
  return req;
});

//Routes for auth
export const addNewProduct = (formData) => API.post("/api/product/", formData);

export const uploadFile = (formData) =>
  API.post("/api/product/upload/file", formData);
