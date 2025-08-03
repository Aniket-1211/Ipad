import React from "react";

import gamesImage from '../images/games.webp'
import { Image } from "./Styled";
            // creating img component using styled-component

                // games component  rendering image
export default class Gammes extends React.Component{
    render(){
        return(
            <>
               <div style={{width:"100%", height:"100%"}}>
                <Image src={gamesImage} alt="games"></Image>
               </div>
            </>
        )
    }
}