const { createShopTool, getShopTools } = require("../controllers/shop_tool.controller");

const router = require("express").Router()

router.post('/', createShopTool)
router.get("/", getShopTools);
// router.get("/:id", getToolById);
// router.put("/:id", updateTool);
// router.delete("/:id", deleteTool);

module.exports = router;