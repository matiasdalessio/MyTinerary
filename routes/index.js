const express =require ('express')
const router = express.Router()
const citiesControllers = require('../controllers/cityController')
const itinerariesControllers = require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const validatorCities = require('../config/validatorCities')
const validatorItineraries = require('../config/validatorItineraries')
const validatorUser = require('../config/validatorUser')
const passport = require('passport')

const {newUser, logIn, forcedLogin} = userController
const {getAllItineraries, addItinerary, getCityItineraries, getSingleItinerary, deleteItinerary, updateItinerary, addOrRemoveLike} = itinerariesControllers
const {getSingleCity, getAllCities, addCity, deleteCity, updateCity} = citiesControllers

router.route('/user/signup')
.post(validatorUser,newUser)

router.route('/user/login')
.post(logIn)

router.route('/cities')
.get(getAllCities)
.post(validatorCities, addCity)

router.route('/user/loginLS')
.get(passport.authenticate('jwt', {session: false}), forcedLogin)

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

router.route('/itinerary/addLike/:id')
.put(addOrRemoveLike)


module.exports = router