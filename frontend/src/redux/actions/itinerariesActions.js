import axios from "axios"

const itinerariesActions = {

    loadItineraries: (id, props) => {
        return (dispatch, getState) => {
            axios.get(`https://mytinerary-backend-production-ade7.up.railway.app/api/city/itineraries/${id}`)
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => props.push('/serverdown')) 
        }
    },
    addOrRemoveLike: (sendData, props, id, userLS) => {
        return async () => {
           try {
            const respuesta = await axios.put(`https://mytinerary-backend-production-ade7.up.railway.app/api/itinerary/likes/${id}`, {sendData}, {
                headers: {
                'Authorization': 'Bearer '+userLS.token
                }
            })            
            return  respuesta.data.respuesta
            } catch {
               props.push('/serverdown')
            }
        }
    },    
    addComment: (sendData, props, id, userLS) => {
        return async () => {
           try {
            const respuesta = await axios.post(`https://mytinerary-backend-production-ade7.up.railway.app/api/itinerary/comments/${id}`, {sendData},{
                headers: {
                'Authorization': 'Bearer '+userLS.token
                }
            })          
            return  respuesta.data.respuesta
            } catch {
               props.push('/serverdown')
            }
        }
    },
    editOrRemoveComment: (sendData, id, props, userLS) =>{
        return async () => {
           try {
            const respuesta = await axios.put(`https://mytinerary-backend-production-ade7.up.railway.app/api/itinerary/comments/${id}`, {sendData},{
                headers: {
                'Authorization': 'Bearer '+userLS.token
                }
            })          
            return  respuesta.data.respuesta
            } catch {
               props.push('/serverdown')
            }
        }
    }, 
    loadActivitiesAction: (id, props) => {
        return async () => {
            try {
                const respuesta = await axios.get(`https://mytinerary-backend-production-ade7.up.railway.app/api/itinerary/activities/${id}`)
                return  respuesta.data.respuesta
            } catch {
                 props.push('/serverdown')
            }
        }
    },            
    cleanItineraries: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CLEAN_ITINERARIES', payload: null})
        }
    }
}

export default itinerariesActions