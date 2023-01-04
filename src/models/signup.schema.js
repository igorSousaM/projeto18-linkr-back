import Joi from "joi";

const postSignupSchema = Joi.object({
  name: Joi.string().required().min(1).trim(),
  email: Joi.string().email().required().trim(),
  password: Joi.string().required().min(1).trim(),
  photo: Joi.string().uri(),
});

export { postSignupSchema };