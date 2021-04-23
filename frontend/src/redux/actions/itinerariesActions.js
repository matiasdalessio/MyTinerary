import axios from "axios"

const itinerariesActions = {
    
    loadItineraries: (id) => {
        return (dispatch, getState) => {
            axios.get(`http://192.168.0.147:4000/api/city/itineraries/${id}`)
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data.respuesta}))
        }
    },
    cleanItineraries: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CLEAN_ITINERARIES', payload: null})
        }
    }
}

export default itinerariesActions