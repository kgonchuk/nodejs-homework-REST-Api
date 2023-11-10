const { HttpError } = require("../helpers/HttpError");

const isEmptyBody = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    return next(HttpError(400, "missing field favorite"));
  }
  next();
};
module.exports = isEmptyBody;