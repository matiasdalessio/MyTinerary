const validatorUser = (req, res, next) => {
    if(req.body.firstName.length < 2 || req.body.lastName.length < 2 ){
        return res.json({success: false, error: 'Name and Last Name must have more than 2 characters'})
    }
    next()
}

module.exports = validatorUser