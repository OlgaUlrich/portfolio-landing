import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import sam from './img/sam.png'

const Wrapper = styled.div`

height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
text-transform: uppercase;
font-size: 1.5em;
align-items: center;
justify-content: flex-end;


@media only screen and (max-width: 1026px) {
    font-size: 1.5em;
    height: 100vh;
    align-items: center;
    justify-content: center;

    }

.container{
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: 1026px) {
        font-size: 0.8em;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 30%;
        
    
}

.Left{
    display: flex;
    flex-direction:column;
    width: 50%;
    height: 100%;
    align-items: center;

    @media only screen and (max-width: 1026px) {
      width:100%;
    }

    .roundDiv{
        display: none;
      
      
    img{
        width:100%;
        height: 100%;
        border-radius: 100px;
        background-color: ${global.colorSecondMain};
    }
    @media only screen and (max-width: 1026px) {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2em;
      }
       
    }


    .textContent{
        

        @media only screen and (max-width: 1026px) {
           
          }
    }
    .buttonBlock{
       
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 100%;
        align-items: flex-end;
        padding-top: 1em;

        @media only screen and (max-width: 1026px) {
           flex-direction: column;
           align-items: flex-start;
           justify-content: flex-start;
           padding-top: 0.2em;
           width: 100%;
          
          }
        
        button{
            margin-right: 0.2em;
            @media only screen and (max-width: 1026px) {
                width: 100%;
                font-size: 16px;
                margin-top: 0.2em;
               }
        }
    }

}

.Right{
    display: flex;
    flex-direction:column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 1026px) {
        display:none;
     }

    img{
        min-width: 90%;
        height: auto;
   
    }
}

`

export const IntroScreen = () =>{

    return(
        <Wrapper id="intro" className="section">
        <div className="container">
          <div className="Left">
          <div className="roundDiv">
                  <img src={sam} alt="img"/>
                  </div>
              <div className="textContent">
              
              Hi 👋 My name is <text className="accentText">Olga </text> 
              and 
              <br/>I am a beginner programmer.
              <br/>
              <br/>
              I specialize in <text className="accentText">frontend</text>   
              <br/>
              development with <text className="accentText">react</text>, <text className="accentText">redux</text>
              <br/>
              <br/>
              I'm available for work!

              <div className="buttonBlock">
              <button><a href="#contact">Let's have a chat</a></button>
              <button className="outline"><a href="#works">Check my latest work</a></button>
              </div>
              </div>
           
          </div>
          <div className="Right">
              <img src={sam} alt="img"/>
          </div>
          </div>
        </Wrapper>
    )

}
