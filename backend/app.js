const express = require("express");
const cors = require("cors");



const app = express();

app.use(cors());
app.use(express.json());
const productRoutes = require("./src/routes/product.routes");
const authRoutes = require("./src/routes/auth.routes");
const storeRoutes = require("./src/routes/store.routes");
const stockRoutes = require("./src/routes/stock.routes");

app.use("/api/stock", stockRoutes);
app.use("/api/stores", storeRoutes);




app.get("/", (req, res) => {
  res.json({ message: "Stock Management API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

module.exports = app;