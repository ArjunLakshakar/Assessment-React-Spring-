import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9090/api/notes", // Spring Boot backend
});

export default api;
