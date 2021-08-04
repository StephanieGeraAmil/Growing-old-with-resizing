import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Dimensions  = () => {
    const {dimensions}=useContext(GlobalContext)
   
    return (
        <div>
            <h3>{`${dimensions.width} px / ${dimensions.height}  px`}</h3>         
        </div>
        
    )
}
