import React,{useEffect, useContext} from 'react'
import { BigHead } from '@bigheads/core'
import { GlobalContext } from '../context/GlobalState'


export const Avatar = () => {
    const {changeDimensions}=useContext(GlobalContext)
    const {dimensions}=useContext(GlobalContext)
  
    const getWindowDimensions=()=> {
    const { innerWidth: width, innerHeight: height } = window;
    let category="m"
    console.log(width)
   
    if(width>1000){
        category="l"
    }
    if(width<700){
        category="s"
    }
    
    return {
            width,
            height,
            category
         };
    }
     
    useEffect(() => { 
      
        const handleResize =()=> {
             changeDimensions(getWindowDimensions())
        }
        handleResize()
        window.addEventListener('resize', handleResize);
      
     }, []);
    const getFeature=(possibilities)=>{
        const randompos=Math.floor(Math.random()*possibilities.length);
        return possibilities[randompos];
    }
  
    
   // useDebugValue used to display a label for custom hooks in React DevTools.
   // The custom hook should take in a minimum and maximum width, and return whether the current window size satisfies the condition.

    return (
        <div className="avatar">
            { dimensions.category==="m" && <BigHead
                accessory="none"
                body="chest"
                circleColor="blue"
                clothing="shirt"
                clothingColor={getFeature(['blue','black','green','red','white'])}
                eyebrows={getFeature(['raised','serious','concerned'])}
                eyes={getFeature(["normal","happy","wink","content","simple","heart"])}
                faceMask={false}
                faceMaskColor="blue"
                facialHair="none"
                graphic="none"
                hair={getFeature(["bob",'long'])}
                hairColor="black"
                hat="none"
                hatColor="blue"
                lashes={false}
                lipColor="pink"
                mask={false}
                mouth={getFeature(['open','serious','grin'])}
                skinTone="light"
            /> 
            }
            { dimensions.category==="s" && <BigHead
                accessory="none"
                body="chest"
                circleColor="blue"
                clothing="shirt"
                clothingColor={getFeature(['blue','black','green','red','white'])}
                eyebrows={getFeature(['raised','serious','concerned'])}
                eyes={getFeature(["normal","happy","wink","content","simple","heart"])}
                faceMask={false}
                faceMaskColor="blue"
                facialHair="none"
                graphic="none"
                hair="none"
                hairColor="black"
                hat="none"
                hatColor="blue"
                lashes={false}
                lipColor="pink"
                mask={false}
                mouth={getFeature(['open','serious','grin'])}
                skinTone="light"
            /> 
            }
            {dimensions.category==="l" &&  <BigHead
                accessory="none"
                body="chest"
                circleColor="blue"
                clothing="shirt"
                clothingColor={getFeature(['blue','black','green','red','white'])}
                eyebrows={getFeature(['raised','serious','concerned'])}
                eyes={getFeature(["normal","happy","wink","content","simple","heart"])}
                faceMask={false}
                faceMaskColor="blue"
                facialHair="none"
                graphic="none"
                hair="bun"
                hairColor="white"
                hat="none"
                hatColor="blue"
                lashes={false}
                lipColor="pink"
                mask={false}
                mouth={getFeature(['open','serious','grin'])}
                skinTone="light"
            /> 
            }
        </div>
    )
}
