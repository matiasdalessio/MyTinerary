import {combineReducers} from "redux";
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'

const mainReducer = combineReducers({
    cityReducer: citiesReducer,
    itineraryReducer: itinerariesReducer
})

export default mainReducer