import React  from "react";
import settingsImage from '../images/settings.png'
import { Image } from "./Styled.js";

export default class Settings extends React.Component{
    
    render(){
        return(
            <>
               <div style={{width:"100%" , height:"100%"}}>
                    <Image src={settingsImage}  alt="Settings"></Image>
               </div>
            </>
        )
    }
}