const { Joi } = require('celebrate')

const bodySchema = Joi.object().keys({
    nome_usuario: Joi.string().min(3).required(),    
})

const pathSchema = { nome_usuario: Joi.string().min(3).required() } 

module.exports = {
    bodySchema,
    pathSchema
}