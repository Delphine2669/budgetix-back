const express = require("express");
const fs = require("fs");
const router = express.Router();
const userControllers = require("./controllers/userControllers");
const incomeControllers = require("./controllers/incomeControllers");
router.get("/users", userControllers.browse);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);
router.get("/users/:id", userControllers.read);
router.delete("/users/:id", userControllers.destroy);

router.get("/incomes", incomeControllers.browse);
router.post("/incomes", incomeControllers.add);
router.put("/incomes/:id", incomeControllers.edit);
router.get("/incomes/:id", incomeControllers.read);
router.delete("/incomes/:id", incomeControllers.destroy);
module.exports = router;
