import axios from "axios"

const citiesActions = {

    fetchCities: () => {
        return (dispatch, getState) => {
            axios.get(`http://192.168.0.147:4000/api/cities`)
            .then(response => response.data.success
                ? dispatch({type: 'FETCH_CITIES', payload: response.data.respuesta})
                : dispatch({type: 'FETCH_CITIES', payload: response.data.success}))
            .catch(error => dispatch({type: 'FETCH_CITIES', payload: error})) 
        }
    },
    findCity: (e) => {
        return (dispatch, getState) => {
            dispatch ({type: 'FIND_CITY', payload: e})
        }
    },
}

export default citiesActions