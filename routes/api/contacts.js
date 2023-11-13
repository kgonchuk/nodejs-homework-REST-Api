const express = require("express");
const router = express.Router();
const { validateBody, isValidId, isEmptyBody } = require("../../middleware");
const { schemas } = require("../../models/contact");

const ctr = require("../../controllers/contactsController");

router.get("/", ctr.listContacts);

router.get("/:contactId", isValidId, ctr.getContactById);

router.post("/", validateBody(schemas.addSchema), ctr.addContact);

router.delete("/:contactId", isValidId, ctr.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctr.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateFavoriteSchema),
  ctr.updateFavorite
);

module.exports = router;
