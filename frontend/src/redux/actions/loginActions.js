import axios from "axios"

const loginActions = {

    fetchCountries: (props) => {
        return (dispatch, getState) => {
            axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(response => dispatch({type: 'FETCH_COUNTRIES', payload: response.data}))
            .catch(error => props.history.push('/serverdown')) 
        }
    },
}

export default loginActions