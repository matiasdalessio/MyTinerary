import {combineReducers} from "redux";
import onlyReducer from './onlyReducer'

const mainReducer = combineReducers({
    onlyOne: onlyReducer
})

export default mainReducer