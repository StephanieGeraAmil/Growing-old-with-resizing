import React,{createContext, useReducer } from "react"
import AppReducer from './AppReducer.js'

//initial state
 const initialstate={
    dimensions:{   
          }}

//create context
export const GlobalContext = createContext(initialstate)




//provider component
export const GlobalProvider = ({children})=>{ 
    const [state, dispatch]= useReducer(AppReducer, initialstate)
  

    //actions
  
    const changeDimensions=(dimensions)=>{

        dispatch({
            type: 'SET_DIMENSIONS',
            payload: dimensions
            });
           
    }

    return(
        <GlobalContext.Provider value={{
            dimensions: state.dimensions,changeDimensions}}>
            {children}
        </GlobalContext.Provider>
    )
}
