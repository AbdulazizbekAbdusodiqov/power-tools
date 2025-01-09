const { createDitrict, getDistricts, getDistrictById, updateDistrict, deleteDistrict } = require("../controllers/district.controller");

const router = require("express").Router()

router.post('/', createDitrict)
router.get("/", getDistricts);
router.get("/:id", getDistrictById);
router.put("/:id", updateDistrict);
router.delete("/:id", deleteDistrict);

module.exports = router;