const { createOwner, getOwners, getOwnerById, updateOwner, deleteOwner } = require("../controllers/owner.controller")

const router = require("express").Router()

router.post('/', createOwner)
router.get("/", getOwners);
router.get("/:id", getOwnerById);
router.put("/:id", updateOwner);
router.delete("/:id", deleteOwner);

module.exports = router;