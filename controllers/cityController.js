const City = require('../models/City')

const citiesControllers = {
    getAllCities: async (req,res) => {
        const cities = await City.find()
        res.json({success: true, respuesta: cities})
    },
    getSingleCity: async (req,res) => {
        const idABuscar = (req.params.id)
        const citySeleccionada = await City.findOne({_id: idABuscar})
        res.json({success: true, respuesta: citySeleccionada})
    
    },
    addCity: async (req,res) => {
        const {name, country, img} = req.body
        const cityToAdd = new City({name: name, country: country, img: img})
        await cityToAdd.save()
        const cities = await City.find()
        res.json({success: true, respuesta: cities})            
    },
    deleteCity:(req,res)=>{
        const id = (req.params.id)
        info = info.filter(tarea => tarea.id !== id)
        res.json({respuesta: info})
    
    },
    updateCity: (req,res)=>{
    
    },
}


module.exports = citiesControllers