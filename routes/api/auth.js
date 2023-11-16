const express = require("express");
const { validateBody, authenticate } = require("../../middleware");
const ctrl = require("../../controllers/authController");

const router = express.Router();

const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch("/users", authenticate, ctrl.subscriptionUpdate);
module.exports = router;
