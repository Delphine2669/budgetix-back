const express = require("express");
const fs = require("fs");
const router = express.Router();
const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
module.exports = router;
