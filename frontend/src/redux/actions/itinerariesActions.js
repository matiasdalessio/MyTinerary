import axios from "axios"

const itinerariesActions = {

    loadItineraries: (id, props) => {
        return (dispatch, getState) => {
            axios.get(`http://192.168.0.28:4000/api/city/itineraries/${id}`)
            .then(response => dispatch({type: 'LOAD_ITINERARIES', payload: response.data}))
            .catch(error => props.push('/serverdown')) 
        }
    },
    addOrRemoveLike: (sendData, props, id, userLS) => {
        return async () => {
           try {
            const respuesta = await axios.put(`http://192.168.0.28:4000/api/itinerary/likes/${id}`, {sendData}, {
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
            const respuesta = await axios.post(`http://192.168.0.28:4000/api/itinerary/comments/${id}`, {sendData},{
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
            const respuesta = await axios.put(`http://192.168.0.28:4000/api/itinerary/comments/${id}`, {sendData},{
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
        console.log("fetcheo actividades")
        return async () => {
            try {
                const respuesta = await axios.get(`http://192.168.0.28:4000/api/itinerary/activities/${id}`)
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