import React from "react";
import { ContainerDiv } from "./Styled";
export default class MenuComponent extends React.Component{
    render(props){
        return(
            <div style={{height:'100%'}} >
                <div style={style.Ipad}>IPAD</div>
                <ContainerDiv className="menu-items">Coverflow</ContainerDiv>
                <ContainerDiv className="menu-items">Music</ContainerDiv>
                <ContainerDiv className="menu-items">Games</ContainerDiv>
                <ContainerDiv className="menu-items">Settings</ContainerDiv>
            </div>
            
        )
    }
} 
let style={
    Ipad:{
        width:'50%',
        height:'16%',
        marginLeft:'1%',
        marginTop:'1%',
        paddingLeft:'44%',
        paddingTop:'2%',
        fontSize:'1.5em',
        boxSizing:'border-box',
        color:'#060401ff',
        fontSize:'2em'
    }
}