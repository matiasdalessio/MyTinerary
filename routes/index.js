const express =require ('express')
const router = express.Router()
const citiesControllers = require('../controllers/cityController')
const validator = require('../config/validator')


const {getSingleCity, getAllCities, addCity, deleteCity, updateCity} = citiesControllers



router.route('/cities')
.get(getAllCities)
.post(validator, addCity)

router.route('/city/:id')
.get(getSingleCity)
.delete(deleteCity)
.put(updateCity)


module.exports = router