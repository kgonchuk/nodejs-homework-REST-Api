const express = require("express");
const router = express.Router();

const {
  validateBody,
  isValidId,
  isEmptyBody,
  authenticate,
} = require("../../middleware");
const schemas = require("../../utils/validation/contactValidationSchemas");
const ctr = require("../../controllers/contactsController");

router.get("/", authenticate, ctr.listContacts);

router.get("/:contactId", authenticate, isValidId, ctr.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctr.addContact);

router.delete("/:contactId", authenticate, isValidId, ctr.removeContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctr.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateFavoriteSchema),
  ctr.updateFavorite
);

module.exports = router;
