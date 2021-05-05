import axios from "axios"

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
    removeComment: (sendData, props, id) => {
        return (dispatch, getState) => {
            axios.post(`http://localhost:4000/api/itinerary/comments/${id}`, {sendData})
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => props.push('/serverdown')) 
        }
    },
    cleanItineraries: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CLEAN_ITINERARIES', payload: null})
        }
    }
}

export default itinerariesActions