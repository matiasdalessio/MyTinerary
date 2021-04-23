const Itinerary = require('../models/Itinerary')

const citiesControllers = {
    getAllItineraries: async (req,res) => {
        try {
            const itineraries = await Itinerary.find().populate('cityID')
            res.json({success: true, respuesta: itineraries})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! an error has ocurred with the server. Verify the endpoint and if it still not working, please try again later...'})
        }
    },
    getCityItineraries: async (req,res) => {
        const itineraryId = (req.params.id)
        try {
            const selectedItineraries = await Itinerary.find({cityID: itineraryId})
            res.json({success: true, respuesta: selectedItineraries})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! an error has ocurred with the server. Verify the endpoint or the ID and if it still not working, please try again later...'})
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
            res.json({success: false, respuesta: 'Oops! an error has ocurred with the server. Verify the endpoint and if it still not working, please try again later...'})
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
            res.json({success: false, respuesta: 'Oops! Verify the endpoint and if it still not working means an error has ocurred with the server. Please try again later...'})
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