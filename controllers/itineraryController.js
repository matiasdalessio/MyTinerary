const Itinerary = require('../models/Itinerary')

const citiesControllers = {
    getAllItinerary: async (req,res) => {
        try {
            const itineraries = await Itinerary.find().populate('cityID')
            res.json({success: true, respuesta: itineraries})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! something happened. Reload the Page and try again'})
        }
    },
    getCityItinerary: async (req,res) => {
        const itineraryId = (req.params.id)
        try {
            const selectedItineraries = await Itinerary.find({cityID: itineraryId})
            res.json({success: true, respuesta: selectedItineraries})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! something happened. Reload the Page and try again'})
        }    
    },
    getSingleItinerary: async (req,res) => {
        console.log(req.params)
        const itineraryId = (req.params.id)
        try {
            const selectedItinerary = await Itinerary.findOne({_id: itineraryId}).populate('cityID')
            res.json({success: true, respuesta: selectedItinerary})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! something happened. Reload the Page and try again'})
        }    
    },
    addItinerary: async (req,res) => {
        try {
            const itineraryToAdd = new Itinerary(req.body)
            await itineraryToAdd.save()
            const itineraries = await Itinerary.find()
            res.json({success: true, respuesta: itineraries})
        } catch(error) { 
            console.log(error)
            res.json({success: false, respuesta: 'Oops! an error has ocurred with the server. Please try again later...'})
        }         
    },
    deleteItinerary: async (req, res) => {
        const itineraryId = req.params.id
        try {
            const deletedItinerary = await Itinerary.findOneAndDelete({_id: itineraryId})
            const itineraries = await Itinerary.find()
            res.json({success: true, respuesta: itineraries})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! the ID you enter was not founded'})
        }
    },
    updateItinerary: async (req, res) => {
        const itineraryId = req.params.id
        try {
            const modifiedItinerary = await Itinerary.findOneAndUpdate({_id: itineraryId}, {...req.body}, {new: true})
            res.json({success: true, respuesta: modifiedItinerary})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! the ID you enter was not founded'})
        }
    },
}

module.exports = citiesControllers