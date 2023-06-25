import axios from "axios";

const httpService = axios.create({
  baseURL: "https://api.wask.co/demo",
  headers: { Token: "2zcgJnjDyb" },
});

export default httpService;
