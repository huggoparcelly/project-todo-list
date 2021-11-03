const Joi = require('joi');

module.exports = (body) => 
  Joi.object({
    task: Joi.string().required(),
    status: Joi.string().required(), 
  }).validate(body);