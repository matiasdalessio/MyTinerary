const Itinerary = require('../models/Itinerary')

const itineraryControllers = {
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
        const cityId = (req.params.id)
        try {
            const selectedCityItineraries = await Itinerary.find({cityID: cityId})
            if (selectedCityItineraries.length != 0) {
                res.json({success: true, respuesta: selectedCityItineraries})
            } else{
            res.json({success: false, respuesta: []})
        }
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! an error has ocurred with the server. Verify the endpoint or the ID and if it still not working, please try again later...'})
        }    
    },
    getSingleItinerary: async (req,res) => {
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
            res.json({success: true, respuesta: itineraryToAdd})
        } catch(error) { 
            console.log(error)
            res.json({success: false, respuesta: 'Oops! Verify the endpoint and if it still not working means an error has ocurred with the server. Please try again later...'})
        }         
    },
    deleteItinerary: async (req, res) => {
        const itineraryId = req.params.id
        try {
            const deletedItinerary = await Itinerary.findOneAndDelete({_id: itineraryId})
            res.json({success: true, respuesta: deletedItinerary})
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
    addOrRemoveLike: async (req, res) => {
        var {sendData} = req.body
        var {userId} =sendData
        const itineraryId = req.params.id
        try {
            const likeAdded = await Itinerary.updateOne({_id: itineraryId}, sendData.userName ? {$push:{usersLiked:{...sendData}}} : {$pull:{usersLiked: {userId}}})
            const selectedCityItineraries = await Itinerary.find({cityID: sendData.paramsId})
            res.json({success: true, respuesta: selectedCityItineraries})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! the ID you enter was not founded'})
        }
    },
    addComment: async (req, res) => {
        var {sendData} = req.body
        const itineraryId = req.params.id
        console.log(req.body)
        try {
            const commentAdded = await Itinerary.updateOne({_id: itineraryId}, {$push:{comments:{...sendData}}})
            const selectedCityItineraries = await Itinerary.find({cityID: sendData.paramsId})
            res.json({success: true, respuesta: selectedCityItineraries})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! the ID you enter was not founded'})
        }
    },
    modifyOrRemoveComment: async (req, res) => {
        const itineraryId = req.params.id
        try {
            const modifiedComment = await Itinerary.updateOne({_id: itineraryId})
            const selectedCityItineraries = await Itinerary.find({cityID: sendData.paramsId})
            res.json({success: true, respuesta: selectedCityItineraries})
        } catch(error) {
            console.log(error)
            res.json({success: false, respuesta: 'Oops! the ID you enter was not founded'})
        }
    },
    
}

module.exports = itineraryControllers