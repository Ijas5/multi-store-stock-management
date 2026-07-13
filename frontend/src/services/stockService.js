import api from "./api";

export const getStock = (threshold = "") => {
  if (threshold === "") {
    return api.get("/stock");
  }

  return api.get(`/stock?threshold=${threshold}`);
};

export const adjustStock = (data) =>
  api.post("/stock/adjust", data);

export const transferStock = (data) =>
  api.post("/stock/transfer", data);