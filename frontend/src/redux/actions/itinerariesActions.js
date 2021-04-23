import axios from "axios"

const itinerariesActions = {
    loadItineraries: (id) => {
        return (dispatch, getState) => {
            axios.get("http://192.168.0.147:4000/api/itineraries/")
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data.respuesta}))
        }

        // return (dispatch, getState) => {
        //     axios.get(`http://192.168.0.147:4000/api/city/itineraries/${id}`)
        //     .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data.respuesta}))
        // }
    }
}

export default itinerariesActions