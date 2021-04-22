import axios from "axios"

const citiesActions = {
    fetchCities: () => {
        return (dispatch, getState) => {
            axios.get(`http://localhost:4000/api/cities`)
            .then(response => dispatch({type: 'FETCH_CITIES', payload: response.data.respuesta}))
            .catch(error => this.props.history.push('/error')) 
        }
    },
    findCity: (e) => {
        return (dispatch, getState) => {
            dispatch ({type: 'FIND_CITY', payload: e})
        }
    },
    fetchSingleCity: (id) => {
        return (dispatch, getState) => {
            axios.get(`http://192.168.0.147:4000/api/city/${id}`)
            .then(response => dispatch({type: 'FETCH_SINGLE_CITY', payload: response.data.respuesta}))
            .catch(error => this.props.history.push('/error')) 
        }
    }
}

export default citiesActions



// filter(city => city.name.toLowerCase().indexOf(aBuscar.trim().toLowerCase())=== 0 )  