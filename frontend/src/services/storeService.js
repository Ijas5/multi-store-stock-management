import api from "./api";

export const getStores = () => api.get("/stores");

export const createStore = (data) =>
  api.post("/stores", data);