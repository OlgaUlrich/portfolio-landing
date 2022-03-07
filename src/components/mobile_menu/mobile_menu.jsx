import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import house from './svg/house-user-solid.svg';
import connect from './svg/paper-plane-solid.svg';
import work from './svg/suitcase-solid.svg';
import profile from './svg/user-solid.svg';
import experience from './svg/code-solid.svg';

const MobileMenu = styled.div`
display: none;

@media only screen and (max-width: 1026px) {
    width:100%;
    height: 15%;
    background-color: ${global.colorMain};
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  
  

}

ul{
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;


    padding-left: 0;


    li{
     
  

      list-style:none;
       
        &:first-child{
       
    }
        a{ display: flex;
            flex-direction: column;
            font-size: 0.7em;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            text-decoration: none;
            svg{
            width: 50%;
            height: 6em;
   
            }
        }

    }
}

`

export const MobileMenuNav = () =>{

    return(
        <MobileMenu>
          
            <ul>
                <li><a href="#intro">
             
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z"/></svg>
                <span>intro</span>
                    </a></li>
                <li><a href="#about_me">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
                <span>about me</span>
                    </a></li>
                <li><a href="#experience">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 144v288C0 457.6 22.41 480 48 480H96V96H48C22.41 96 0 118.4 0 144zM336 0h-160C150.4 0 128 22.41 128 48V480h256V48C384 22.41 361.6 0 336 0zM336 96h-160V48h160V96zM464 96H416v384h48c25.59 0 48-22.41 48-48v-288C512 118.4 489.6 96 464 96z"/></svg>
                <span>experience</span>
                    </a></li>
                <li><a href="#works"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"/></svg>
                <span>latest work</span>
                    </a></li>
                <li><a href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/></svg>
                <span>contact</span>
                    </a></li>
            </ul>
        </MobileMenu>
    )

}