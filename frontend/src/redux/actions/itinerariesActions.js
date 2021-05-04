import axios from "axios"

const itinerariesActions = {
    
    loadItineraries: (id, props) => {
        return (dispatch, getState) => {
            axios.get(`http://localhost:4000/api/city/itineraries/${id}`)
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => props.push('/serverdown')) 
        }
    },
    addOrRemoveLike: (infoAPasar) => {
        console.log(infoAPasar)
        return (dispatch, getState) => {
            axios.put(`http://localhost:4000/api/itinerary/addOrRemoveLike/${infoAPasar.itineraryId}`, {infoAPasar})
            .then(response => dispatch({type: 'ADD_OR_REMOVE_LIKE', payload: response.data}))
            .catch(error => infoAPasar.props.history.push('/serverdown')) 
        }
    },
    cleanItineraries: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CLEAN_ITINERARIES', payload: null})
        }
    }
}

export default itinerariesActions