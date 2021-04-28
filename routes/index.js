const express =require ('express')
const router = express.Router()
const citiesControllers = require('../controllers/cityController')
const itinerariesControllers = require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const validatorCities = require('../config/validatorCities')
const validatorItineraries = require('../config/validatorItineraries')

const {newUser, logIn, deleteUser, getUsers} = userController
const {getAllItineraries, addItinerary, getCityItineraries, getSingleItinerary, deleteItinerary, updateItinerary} = itinerariesControllers
const {getSingleCity, getAllCities, addCity, deleteCity, updateCity} = citiesControllers

router.route('/user/signup')
.post(newUser)
.get(getUsers)

router.route('/user/delete/:id')
.delete(deleteUser)

router.route('/user/login')
.post(logIn)

router.route('/cities')
.get(getAllCities)
.post(validatorCities, addCity)

router.route('/city/:id')
.get(getSingleCity)
.delete(deleteCity)
.put(updateCity)

router.route('/city/itineraries/:id')
.get(getCityItineraries)

router.route('/itineraries')
.get(getAllItineraries)
.post(validatorItineraries, addItinerary)

router.route('/itinerary/:id')
.get(getSingleItinerary)
.delete(deleteItinerary)
.put(updateItinerary)

module.exports = router