import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import heart from '../about_me/svgs/heart-solid.svg'
import mug from '../about_me/svgs/mug-hot-solid.svg'
import lnkd from './svg/lnk.svg'

const FooterNav = styled.footer`
padding-top: 1.5em;
width: 100%;
display: flex;
color: ${global.colorText};
background-color: ${global.colorSecondMain};
justify-content: center;
align-items: center;

@media only screen and (max-width: 1026px) {

    font-size: 0.8em;
    justify-content: center;
    align-items: flex-start;
    
    }

.container{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.left{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.right{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}

img{
    width: 1.5em;
    margin-bottom: -10px;

}

`

export const Footer = () =>{

    return(
     <FooterNav>
         <div className="container">
         <div classname="left">
         Build with <img src={heart} alt="heart"/> and <img src={mug} alt="mug"/>  by Olga<text className="accentText">//</text>Ulrich
         </div>
         <div classname="right">
         Follow me on my medias <a href="https://www.linkedin.com/in/olga-ulrich/"><img src={lnkd} alt="lnk" /></a>
         </div>
         </div>
    </FooterNav>

    )

    }

