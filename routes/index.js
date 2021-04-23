const express =require ('express')
const router = express.Router()
const citiesControllers = require('../controllers/cityController')
const itinerariesControllers = require('../controllers/itineraryController')
const validatorCities = require('../config/validatorCities')
const validatorItineraries = require('../config/validatorItineraries')

const {getAllItinerary, addItinerary, getCityItinerary, getSingleItinerary, deleteItinerary, updateItinerary} = itinerariesControllers
const {getSingleCity, getAllCities, addCity, deleteCity, updateCity} = citiesControllers

router.route('/cities')
.get(getAllCities)
.post(validatorCities, addCity)

router.route('/city/:id')
.get(getSingleCity)
.delete(deleteCity)
.put(updateCity)

router.route('/city/itineraries/:id')
.get(getCityItinerary)

router.route('/itineraries')
.get(getAllItinerary)
.post(validatorItineraries, addItinerary)

router.route('/itinerary/:id')
.get(getSingleItinerary)
.delete(deleteItinerary)
.put(updateItinerary)



module.exports = router