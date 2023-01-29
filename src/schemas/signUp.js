import Joi from "joi";

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  address: Joi.string().required(),
  password: Joi.string().min(8).required(),
  passwordConfirmation: Joi.string().valid(Joi.ref("password")).required()
});

export default signUpSchema;
