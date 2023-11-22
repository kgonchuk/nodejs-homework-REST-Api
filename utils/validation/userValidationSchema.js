const Joi = require("joi");
const subscriptionOptions = ["starter", "pro", "business"];

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const subscriptionUpdate = Joi.object({
  subscription: Joi.string().valid(...subscriptionOptions),
});

module.exports = { registerSchema, loginSchema, subscriptionUpdate };
