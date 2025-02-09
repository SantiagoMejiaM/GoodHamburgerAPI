import Joi from "joi";

const orderScheme = Joi.object({
  sandwich: Joi.string().min(3).required(),
  soft_drink: Joi.string().min(3),
  fries: Joi.bool().required(),
  total: Joi.optional()
});

const validateOrder = (req, res, next) => {
  const { error } = orderScheme.validate(req.body);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  next();
};

export default validateOrder;