const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.post("/", auth, admin, productController.createProduct);
router.get("/", auth, productController.getProducts);
router.put("/:id", auth, admin, productController.updateProduct);
router.delete("/:id", auth, admin, productController.deleteProduct);

module.exports = router;