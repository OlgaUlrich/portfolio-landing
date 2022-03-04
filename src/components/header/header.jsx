import React, {useEffect} from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import Scrollspy from 'react-scrollspy'


const HeaderNav = styled.div`
width: 100%;
height: 80px;
z-index: 999;
background-color: ${global.colorMain};
position: sticky;
top:0;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;

@media only screen and (max-width: 1026px) {
display: none;
}
.scrollContainer{
    height: 100%;
}
.container{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.Logo{
    font-size: 2.5em;
    font-weight: 800;
    text-transform: uppercase;
}

ul{
    display: flex;

    li{
        list-style:none;
        margin-left: 15px;
        height: 78px;
        display: flex;
        align-items: center;
      

       a{
            text-decoration:none;
            color: #ffffff;
            font-size: 1.3em;

        

        }
    
     

    }

.is-current{
        border-bottom: 4px solid ${global.colorAccent}
    }
}



`

export const Header = () =>{
    
   

  
      
    return(
        <HeaderNav className="navigation" id="main-header">
            <div className="container">
            
            <div className="Logo">olga<text className="accentText">//</text>ulrich</div>
            <ul className="navbar">
            <Scrollspy items={ ['intro', 'about_me', 'experience', 'works', 'contact'] } currentClassName="is-current">
                <li className="links"><a href="#intro" >intro</a></li>
                <li className="links"><a href="#about_me">about me</a></li>
                <li className="links"><a href="#experience" >experience</a></li>
                <li className="links"><a href="#works">latest work</a></li>
                <li className="links"><a href="#contact" >contact</a></li>
                </Scrollspy>
            </ul>
            </div>
            
        </HeaderNav>
    )

}