import React from "react";
import styled from "styled-components";
import coverflow1 from '../images/coverflow1.webp'
let CoverflowDiv=styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center
`
export default class Coverflow extends React.Component{
    render(){
        return(
            <>
                <CoverflowDiv style={style.coverflow}>
                    <h1>Coverflow</h1>
                </CoverflowDiv>
            </>
        )
    }
}

let style={
    coverflow:{
        backgroundImage: `url(${coverflow1})`,
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color:'white'
    }
}