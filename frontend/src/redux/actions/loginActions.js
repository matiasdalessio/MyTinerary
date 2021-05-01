import axios from "axios"
import swal from 'sweetalert'

const loginActions = {
    fetchCountries: (props) => {
        return (dispatch, getState) => {
            axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(response => dispatch({type: 'FETCH_COUNTRIES', payload: response.data}))
            .catch(error => props.history.push('/serverdown')) 
        }
    },
    logUser: (userInfo, props) => {
        return async (dispatch, getState) => {
           try {
                const respuesta = await axios.post('http://192.168.0.147:4000/api/user/login', userInfo)
                console.log(respuesta)
                if (!respuesta.data.success) {
                    return respuesta.data
                }
                dispatch({
                    type: "LOG_USER",
                    payload: respuesta.data.respuesta
                    
                })
                return `Welcome back, ${respuesta.data.respuesta.firstName}!`
            }catch(error) {
                return props.history.push('/serverdown')
            } 
        }
    },
    newUser: (userInfo, props) => {
        return async (dispatch, getState) => {
           try {
                const respuesta = await axios.post('http://192.168.0.147:4000/api/user/signup', userInfo)
                if (!respuesta.data.success) {
                    return respuesta.data.error
                }
                dispatch({
                    type: "LOG_USER",
                    payload: respuesta.data.respuesta
                    
                })
                return `Welcome ${respuesta.data.respuesta.firstName}!`               
            }catch(error) {
                return props.history.push('/serverdown')
            } 
        }
    },
    forcedLoginByLS: (userLS, props) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get('http://192.168.0.147:4000/api/user/loginLS', {
                headers: {
                    'Authorization': 'Bearer '+userLS.token
                }
            })
                dispatch({type: 'LOG_USER', payload: {
                    ...respuesta.data.respuesta,
                    token: userLS.token
                }})
            } catch(error) {
                if (!error.response) {
                    return swal("Failed to try to connect with server", "Please try again in a few minutes", "error")
                } else if (error.response.status && error.response.status > 399 && error.response.status < 499) {
                    swal("Invalid Token", "Please Log in again", "error")
                    dispatch({type: 'FORCED_LOGOUT', payload: null})
                } 
            }           
        }
    },
    removeUserInfo: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT'})
        }
    },
    
}

export default loginActions