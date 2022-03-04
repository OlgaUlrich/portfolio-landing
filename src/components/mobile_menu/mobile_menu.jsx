import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';

const MobileMenu = styled.div`
display: none;

@media only screen and (max-width: 1026px) {
    width:100%;
    height: 15%;
    background-color: ${global.colorMain};
    position: fixed;
    bottom: 0;
    display: flex;
   
    justify-content: center;
    align-items: flex-start;
  

}

ul{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0;
    margin: 0;

    li{
        list-style:none;
       
        &:first-child{
       
    }
        a{
            font-size: 0.7em;
        }

    }
}

`

export const MobileMenuNav = () =>{

    return(
        <MobileMenu>
          
            <ul>
                <li><a>intro</a></li>
                <li><a>about me</a></li>
                <li><a>experience</a></li>
                <li><a>latest work</a></li>
                <li><a>contact</a></li>
            </ul>
        </MobileMenu>
    )

}