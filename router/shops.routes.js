const { createShop, getShops, getShopById, updateShop, deleteShop } = require("../controllers/shops.controller");

const router = require("express").Router()

router.post("/", createShop);
router.get("/", getShops);
router.get("/:id", getShopById );
router.put("/:id", updateShop );
router.delete("/:id", deleteShop);

module.exports = router;