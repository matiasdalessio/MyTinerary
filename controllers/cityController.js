const City = require('../models/City')

const citiesControllers = {
    getAllCities: async (req,res) => {
        try {
            const cities = await City.find()
            res.json({success: true, respuesta: cities})
        } catch(error) {
            res.json({success: false, respuesta: 'Oops! something happened. Reload the Page and try again'})
        }
    },
    getSingleCity: async (req,res) => {
        const cityId = (req.params.id)
        try {
            const selectedCity = await City.findOne({_id: cityId})
            res.json({success: true, respuesta: selectedCity})
        } catch(error) {
            res.json({success: false, respuesta: 'Oops! something happened. Reload the Page and try again'})
        }
    
    },
    addCity: async (req,res) => {
        const {name, country, img, info} = req.body
        try {
            const cityToAdd = new City({name, country, img, info})
            await cityToAdd.save()
            const cities = await City.find()
            res.json({success: true, respuesta: cities})
        } catch(error) { 
            res.json({success: false, respuesta: 'Oops! an error has ocurred with the server. Please try again later...'})
        }         
    },
    deleteCity: async (req, res) => {
        const cityId = req.params.id
        try {
            const deletedCity = await City.findOneAndDelete({_id: cityId})
            res.json({success: true, respuesta: deletedCity}) 
        } catch(error) {
            res.json({success: false, respuesta: 'Oops! the ID you enter was not founded'})
        }
    },
    updateCity: async (req, res) => {
        const cityId = req.params.id
        try {
            const modifiedCity = await City.findOneAndUpdate({_id: cityId}, {...req.body}, {new: true})
            res.json({success: true, respuesta: modifiedCity})
        } catch(error) {
            res.json({success: false, respuesta: 'Oops! the ID you enter was not founded'})
        }
    },
}

module.exports = citiesControllers