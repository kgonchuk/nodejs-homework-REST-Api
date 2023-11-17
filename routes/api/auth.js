const express = require("express");

const { validateBody, authenticate } = require("../../middleware");
const ctrl = require("../../controllers/authController");
const schemas = require("../../utils/validation/userValidationSchema");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionUpdate),
  ctrl.subscriptionUpdate
);

module.exports = router;
