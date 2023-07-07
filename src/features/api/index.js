import axios from "axios";

const API = axios.create({ baseURL: "https://archive-api.onrender.com" });

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

//Upload files
export const uploadFile = (files) =>
  API.post("https://archive-api.onrender.com/api/product/upload/file", files);
