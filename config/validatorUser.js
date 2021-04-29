const joi = require('joi')

const validatorUser = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
        lastName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
        country: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
        email: joi.string().required().trim().email(),
        password: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/),
        repeatpassword: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/),
        img: joi.string().required().trim()
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    if (validation.error) {
        return res.json({success: false, error: validation.error})
    }
    next()
}

module.exports = validatorUser