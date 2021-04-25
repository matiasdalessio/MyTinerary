const initialState = {
    cities: [],
    itineraries:[]
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
        default:
            return state
    }
}

export default citiesReducer