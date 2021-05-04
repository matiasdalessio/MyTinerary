import axios from "axios"

const itinerariesActions = {
    
    loadItineraries: (id, props) => {
        return (dispatch, getState) => {
            axios.get(`http://localhost:4000/api/city/itineraries/${id}`)
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => props.push('/serverdown')) 
        }
    },
    // addLike: (userInfo, itineraryId) => {
    //     return (dispatch, getState) => {
    //         axios.put(`http://localhost:4000/api/itinerary/addLike/${itineraryId}`, {userInfo})
    //         .then(response => console.log(response.data.success))
    //         .catch(error => props.push('/serverdown')) 
    //     }
    // },
    // removeLike: (id, itineraryId) => {
    //     return (dispatch, getState) => {
    //         axios.put(`http://localhost:4000/api/itinerary/removeLike/${itineraryId}`, {id})
    //         .then(response => console.log(response.data.success))
    //         .catch(error => props.push('/serverdown')) 
    //     }
    // },
    cleanItineraries: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CLEAN_ITINERARIES', payload: null})
        }
    }
}

export default itinerariesActions