const initialState = {
    cities: null,
    city: null,
    itineraries:null
}


const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CITIES':
            return {
                ...state,
                cities: action.payload,   
                original: action.payload            
            }
        case 'LOAD_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload           
            }        
        default:
            return state
    }
}

export default citiesReducer