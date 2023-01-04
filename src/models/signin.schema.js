import joi from 'joi';

const postSigninSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

export default postSigninSchema;