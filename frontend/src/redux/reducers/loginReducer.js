const initialState = {
    userLogged:null,
    countries: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES':
            return {
                ...state,
                countries: action.payload          
            }
        case 'LOG_USER':
            localStorage.setItem("userLogged", JSON.stringify(action.payload))
            return {
                ...state,
                userLogged: action.payload         
            }
        case 'LOG_OUT':
            localStorage.removeItem("userLogged")
            return {
                ...state,
                userLogged: null        
            }                 
        default:
            return state
    }
}

export default citiesReducer