const { createClient, getClients, getClientById, updateClient, deleteClient } = require("../controllers/client.controller")

const router = require("express").Router()

router.post("/", createClient);
router.get("/", getClients);
router.get("/:id", getClientById);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;