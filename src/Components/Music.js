import React from "react";
import {ContainerDiv} from "./Styled";


export default class Music extends React.Component{
    render(props) {
      return (
        <div  >
            <ContainerDiv>Music</ContainerDiv>
            <ContainerDiv className="menu-items">Songs</ContainerDiv> 
            <ContainerDiv className="menu-items">Albums</ContainerDiv>
            <ContainerDiv className="menu-items">Artists</ContainerDiv>
        </div>
        
      )
    }
}

// let styles={
//     outerDiv:{
//         width:'100%', 
//         height:'100%'
//     },
//     firstDIv:{
//         width:'50%', 
//         height:'100%'
//     }
// }