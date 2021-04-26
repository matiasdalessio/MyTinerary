const initialState = {
    cities: [],
    city: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CITIES':
            return {
                ...state,
                cities: action.payload,   
                original: action.payload            
            }
        case 'FIND_CITY':
            return {
                ...state,
                cities: state.original.filter(city => city.name.toLowerCase().indexOf(action.payload.trim().toLowerCase())=== 0 )           
            }
        case 'FETCH_SINGLE_CITY':
            return {
                ...state,
                city: action.payload,            
            }    
        default:
            return state
    }
}

export default citiesReducer