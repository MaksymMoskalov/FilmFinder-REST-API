const Joi = require("joi");

const registerShema = Joi.object({
  password: Joi.string().min(6).required(),
  userName: Joi.string().required(),
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required(),
});

const loginShema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required(),
});

const emailShema = Joi.object({
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required(),
});

module.exports = {
  registerShema,
  emailShema,
  loginShema,
};
