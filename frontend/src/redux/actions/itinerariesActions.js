import axios from "axios"
import swal from "sweetalert"

const itinerariesActions = {
    
    loadItineraries: (id, props) => {
        return (dispatch, getState) => {
            axios.get(`http://localhost:4000/api/city/itineraries/${id}`)
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => props.push('/serverdown')) 
        }
    },
    addOrRemoveLike: (sendData, props, id) => {
        return (dispatch, getState) => {
            axios.put(`http://localhost:4000/api/itinerary/likes/${id}`, {sendData})
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => props.push('/serverdown')) 
        }
    },    
    addComment: (sendData, props, id) => {
        return (dispatch, getState) => {
            axios.post(`http://localhost:4000/api/itinerary/comments/${id}`, {sendData})
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => props.push('/serverdown')) 
        }
    },
    editOrRemoveComment: (sendData, id) => {
        return (dispatch, getState) => {
            axios.put(`http://localhost:4000/api/itinerary/comments/${id}`, {sendData})
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => swal("Failed to try to connect with server", "Please try again in a few minutes", "error")) 
        }
    },
    cleanItineraries: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CLEAN_ITINERARIES', payload: null})
        }
    }
}

export default itinerariesActions