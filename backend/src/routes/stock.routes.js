const express = require("express");
const router = express.Router();

const stockController = require("../controllers/stock.controller");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.post("/adjust", auth, admin, stockController.adjustStock);

router.post("/transfer", auth, admin, stockController.transferStock);

router.get("/", auth, stockController.getStock);

module.exports = router;