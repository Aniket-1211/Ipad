import React from "react";
import music from '../images/music.png'
export default class Arijit extends React.Component{
    render() {
      return (
        <div style={{width:'100%' , height:'100%'}}>
          <img style={{width:'100%' , height:'100%'}} src={music}></img>
        </div>
      )
    }
}