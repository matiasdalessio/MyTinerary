const User = require('../models/User')

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
        console.log(req.body)
        const {firstName, lastName, email, password, country, img} = req.body
        const existentMail = await User.findOne({email})
        var respuesta;
        var error;    
        if (!existentMail) {
            try {
                const usuarioGrabado = new User({firstName, lastName, email, password, country, img})
                await usuarioGrabado.save()
                respuesta = usuarioGrabado 
            } catch {
                error = "it was an error in the register. please try again"
            }                  
       } else {
           error = "the E-mail is already in use"
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
        if (userExist && userExist.password === password) {
            respuesta = userExist
        } else {
            error = "Usuario y/o contraseña incorrectos"
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