
export default(state, action)=>{
   
    switch(action.type){
       case 'SET_DIMENSIONS':
        return{
        ...state,
      dimensions: action.payload
        }
        default:  return state
    }
}

// how a state changes in response of an action