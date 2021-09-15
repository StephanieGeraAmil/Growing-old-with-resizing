import React, {useContext} from 'react'
import { Dimensions } from './Dimensions '
import { GlobalContext } from '../context/GlobalState'

export const Message = () => {
      const {dimensions}=useContext(GlobalContext)
    //You are seeing Diana because your screen size is medium!
    let msg= "I'm an Adult"
    if(dimensions.category==="l"){
        msg= "I'm an Old Woman"
    }
    if(dimensions.category==="s"){
         msg= "I'm a Baby"
    }
    
    
    return (
        <div className='message'>     
            <h3>Hi there!!</h3>
            <h1>{msg}</h1>  
            <Dimensions/> 
        </div>
    )
}
