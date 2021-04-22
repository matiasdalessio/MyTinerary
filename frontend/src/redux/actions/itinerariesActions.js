
const itinerariesActions = {
    showMoreToggle: () => {
        return (dispatch, getState) => {
            dispatch({type: 'SHOWMORE_TOGGLE', payload: "response.data.respuesta"})
  
        }
    },
}

export default itinerariesActions