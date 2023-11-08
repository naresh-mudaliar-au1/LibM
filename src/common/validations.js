const Joi = require('joi');

const userValidationSchema = Joi.object({
  username: Joi.string().trim(true).required(),
  password: Joi.string().min(8).trim(true).required(),
});

const bookValidationSchema = Joi.object({
  title: Joi.string().trim(true).required(),
  author: Joi.string().trim(true).required(),
  summary: Joi.string().trim(true).required(),
});

const validateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({
        success: false,
        message: result?.error?.details[0].message,
      });
    }
    if (!req.value) {
      req.value = {};
    }
    req.value["body"] = result.value;
    next();
  };
};
export default { validateRequest, userValidationSchema, bookValidationSchema };
