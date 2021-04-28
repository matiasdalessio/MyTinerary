const initialState = {
    countries: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES':
            return {
                ...state,
                countries: action.payload          
            }
        default:
            return state
    }
}

export default citiesReducer