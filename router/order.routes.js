const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } = require("../controllers/order.controller");

const router = require("express").Router()

router.post('/', createOrder)
router.get("/", getOrders);
router.get("/:id", getOrderById);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;