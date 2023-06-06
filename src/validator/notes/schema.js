/* eslint-disable linebreak-style */
const Joi = require('joi');
/* eslint-disable linebreak-style */
const NotePayloadSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };
