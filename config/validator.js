const validator = (req, res, next) => {
    if (req.body.name === '' || req.body.country === '' ) {
       return res.json({success: false, error: 'You cannot send empty values.'})
    } 
    next()
}

module.exports = validator