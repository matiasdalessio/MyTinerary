import axios from "axios"

const citiesActions = {

    fetchCities: (props) => {
        return (dispatch, getState) => {
            axios.get(`http://192.168.0.28:4000/api/cities`)
            .then(response => response.data.success
                ? dispatch({type: 'FETCH_CITIES', payload: response.data})
                : dispatch({type: 'FETCH_CITIES', payload: props.history.push('/error')}))
            .catch(error => props.history.push('/serverdown')) 
        }
    },
    fetchSingleCity: (id, props) => {
        return (dispatch, getState) => {
            axios.get(`http://192.168.0.28:4000/api/city/${id}`)
            .then(response => dispatch({type: 'FETCH_SINGLE_CITY', payload: response.data}))
            .catch(error => props.history.push('/serverdown')) 
        }
    },
    findCity: (e) => {
        return (dispatch, getState) => {
            dispatch ({type: 'FIND_CITY', payload: e})
        }
    },
}

export default citiesActions