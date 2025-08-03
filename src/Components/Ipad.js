import React from "react";
import styles from './ipad.module.css'
import Menu from "./Settings";
import Gammes from "./Games";
import Coverflow from "./Coverflow";

import MenuComponent from "./MenuComponent.js";
import Arijit from "./Arijit.js";

export default class Ipad extends React.Component{
     constructor(){
        super();
        this.state={
            menu:'menu'
        }
        this.eventListerActive=false;
    }
    
    render(){
        let {menu}=this.state;
        return (
                    // ipad main div --> divied into 2 
            <div className={styles.main}>

                        {/* first div to give UI  */}
                <div className={styles.first}> 
                    {menu==='games' &&  <Gammes></Gammes>}
                    {menu==='settings' &&  <Menu ></Menu>}
                    {menu==='coverflow' && <Coverflow ></Coverflow>}
                    {/* {menu==='music' &&  <Music menu={menu} mousePad={this.mousePad} ></Music>} */}
                    {menu==='menu' && <MenuComponent ></MenuComponent>}
                    {/* {(menu==='songs' || menu==='artists' || menu==='albums')   && <Arijit></Arijit>} */}
                    {menu==='music' && <Arijit></Arijit>}

                </div>

                        {/* second div to give mouse  event */}
                <div  className={styles.second}> 
                    <div className={styles.secondDivA} >Menu</div>

                    <div className={styles.secondDivB}>
                        <div className={styles.secondDivBinside}><i className='fa-solid fa-angles-left'></i></div>
                        <div className={styles.secondDivBCirle}></div>
                        <div className={styles.secondDivBinside}><i className="fa-solid fa-angles-right"></i></div>
                    </div>

                    <div className={styles.secondDivA}> <i className="fa-solid fa-play"></i> <i className="fa-solid fa-pause"></i></div>

                </div>
            </div>
        )
    }




            // using componentDidMount to create mouse in second Div
            componentDidMount(){
                this.mousePad();
            }
            


                // function to add mouse move , mouse leave  on second div to act as mouse , adding all other functionality in second div
            mousePad=()=>{
                if(this.eventListerActive)
                    return
                let {menu}=this.state;
                
                if(menu==='games' || menu==='coverflow' || menu==='settings' || menu==='music')
                    return 
                
                this.menuItems=document.querySelectorAll('.menu-items');
                this.currentIndex=0;  // used to highlight element when hovered
                this.lastY=null;      // used to track position
                
                

                let scrollDiv=document.querySelector(`.${styles.second}`)
                
                scrollDiv.addEventListener('mousemove',(e)=>this.handleMove(e));
                scrollDiv.addEventListener('mouseleave',()=>this.lastY=null);
                
                // adding click event on circle 
                let circleDiv=document.querySelector(`.${styles.secondDivBCirle}`);
                circleDiv.addEventListener('click',()=>this.handleUpdateUI());
                
                // adding Menu click to come to main menu
                let backToMenuDiv=document.querySelector(`.${styles.secondDivA}`);
                backToMenuDiv.addEventListener('click',()=>this.setState({menu:'menu'}));

                this.eventListerActive=true;
            }




                // function to update UI when user clicks on circle and highlighted item is rendered on UI screen
            handleUpdateUI=()=>{
                this.setState({
                    menu:this.menuItems[this.currentIndex].textContent.toLowerCase()
                })   
            }
                



               // function to update mouse scroll in second div
            handleMove=(e)=>{
                
                if(this.lastY===null){
                    this.lastY=e.clientY;
                    return;
                }
                
                const diff=e.clientY-this.lastY;
                if(Math.abs(diff)>20){
                    
                    
                    // removing hover from previous element
                    if(this.currentIndex<this.menuItems.length && this.currentIndex>=0)
                    this.menuItems[this.currentIndex].style.backgroundColor='white'

                    if(diff>0){
                        // if diff>20 meansing mouse downward, increasing index in menu-items
                        this.currentIndex=(this.currentIndex+1)%this.menuItems.length;
                    }else{
                        // if diff<0 meansing mouse forward, decreasing index in menu-items
                        this.currentIndex=(this.currentIndex-1+this.menuItems.length)%this.menuItems.length;
                    }

                    // if(this.currentIndex<this.menuItems.length && this.currentIndex>=0)
                    this.menuItems[this.currentIndex].style.backgroundColor='rgba(122, 221, 56, 1)';
                    this.lastY=e.clientY;
                }

            }

            componentDidUpdate(prevProps,prevState){
                
                // setTimeout(this.mousePad(),4000);
                if(prevState.menu!==this.state.menu){
                    this.eventListerActive=false;
                    this.mousePad()
                }
            }
            
            
}




