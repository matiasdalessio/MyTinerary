const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userController = {
    getUsers: async (req,res) => {
        try {
            const users = await User.find()
            res.json({success: true, respuesta: users})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! an error has ocurred with the server. Verify the endpoint and if it still not working, please try again later...'})
        }
    },
    newUser: async (req, res) => {
        var {firstName, lastName, email, password, country, img} = req.body
        const existentMail = await User.findOne({email})
        var respuesta;
        var error;    
        password = bcryptjs.hashSync(password, 10)
        if (!existentMail) {
            try {
                const createdUser = new User({firstName, lastName, email, password, country, img})
                await createdUser.save()
                respuesta = createdUser 
            } catch {
                error = "There was an error in the register."
            }                  
       } else {
           error = "The E-mail is already in use"
       }
       res.json({
           success: !error ? true : false,
           respuesta: respuesta,
           error: error
       })        
    },
    logIn: async (req, res) => {
        const {email, password} = req.body
        var respuesta;
        var error;
        const userExist = await User.findOne({email: email})
        if (userExist) {
            const passwordMatch = bcryptjs.compareSync(password, userExist.password)
            if (passwordMatch) {
                respuesta = userExist
            } else {
                error = "Invalid User or Password"
            }            
        } else {
            error = "Invalid User or Password"
        }
        res.json({
            success: !error ? true : false,
            respuesta: respuesta,
            error: error
        })
    },
    deleteUser: async (req, res) => {
        const id = req.params.id
        const deletedUser = await User.findOneAndDelete({_id: id})
        res.json({success: true, respuesta: deletedUser})
    }
}

module.exports = userController