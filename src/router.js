const express = require("express");
const fs = require("fs");
const router = express.Router();
const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);
router.get("/users/:id", userControllers.read);
router.delete("/users/:id", userControllers.destroy);
module.exports = router;
