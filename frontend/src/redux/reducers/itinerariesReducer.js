const initialState = {
    itineraries:[],
    success: true,
}


const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload.respuesta,
                success: action.payload.success      
            } 
        case 'CLEAN_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload           
            }             
        default:
            return state
    }
}

export default citiesReducer