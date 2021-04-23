import axios from "axios"

const citiesActions = {
    fetchCities: () => {
        return (dispatch, getState) => {
            axios.get(`http://localhost:4000/api/cities`)
            .then(response => dispatch({type: 'FETCH_CITIES', payload: response.data.respuesta}))
            .catch(error => (this.props.history.push('/error'))) 
        }
    },
    findCity: (e) => {
        return (dispatch, getState) => {
            dispatch ({type: 'FIND_CITY', payload: e})
        }
    },
}

export default citiesActions