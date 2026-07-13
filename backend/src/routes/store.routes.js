const express = require("express");
const router = express.Router();

const storeController = require("../controllers/store.controller");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.post("/", auth, admin, storeController.createStore);
router.get("/", auth, storeController.getStores);
router.put("/:id", auth, admin, storeController.updateStore);
router.delete("/:id", auth, admin, storeController.deleteStore);

module.exports = router;