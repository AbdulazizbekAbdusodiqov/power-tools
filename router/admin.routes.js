const { createAdmin, updateAdmin, getAdmins, getAdminById, deleteAdmin } = require("../controllers/admin.controller");

const router = require("express").Router()

router.post("/", createAdmin);
router.get("/", getAdmins);
router.get("/:id", getAdminById);
router.put("/:id",updateAdmin );
router.delete("/:id", deleteAdmin);

module.exports = router;