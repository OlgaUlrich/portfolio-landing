import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import MyStackCard from './myStackCard'
import react from './svgs/react.svg'
import two from './svgs/2.svg'
import three from './svgs/3.svg'
import four from './svgs/4.svg'
import docker from './svgs/docker.svg' 
import list from './svgs/file.svg'
import sass from './svgs/sass.svg'
import sc from './svgs/styled_comp.png'

import six from './svgs/6.svg'

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction:column;
align-items: center;
background-color: #232734;


@media only screen and (max-width: 1026px) {
    font-size: 0.8em;
    }



.container{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 5%;
    font-size: 1.5em;
    padding-bottom: 5%;
    


    @media only screen and (max-width: 1026px) {
        flex-direction: column;
        
        }
}

.Left{
width: 35%;

@media only screen and (max-width: 1026px) {
    width:100%;
    padding-top: 0;
    
    }

    .btWrapper{
        display: flex;
        flex-direction: column;

        button{
            margin-top:1rem;
        }

    }
}

.Right{
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;

    img{
        height: 100%;
    }

    .skillsSection{
        display:flex;
        flex-wrap:wrap;

        span{
            background-color: ${global.colorAccent};
            padding:0.2em;
            border-radius: 0.5rem;
            margin-right: 0.5em;
            @media only screen and (max-width: 1026px) {
                margin-top: 0.3em;
                }
        }
        span:last-child{
            margin-right: 0;
        }
       
    }

    .stackSection{
        display:flex;
        flex-wrap:wrap;
        padding-bottom:1em;
        @media only screen and (max-width: 1026px) {
            width:100%;
            justify-content: center;
            align-items: center;
            
            }
    }
}

`

export const AboutMe = () =>{

    return(
        <Wrapper className="section">
            <div className="container"  id="about_me">
          <div className="Left">
          <h2>About me</h2>

          My name is Olga <br/>
          I am a SEO specialist and a former student of SIT Academy.
           <br/>
           <br/>
           <br/>
           Currently I am looking for a full-time role as a junior <text className="accentText">/</text> intern Frontend developer!
           <br/>
           <br/>
           <br/>

         <div className="btWrapper">
           <button className="grayBtn" bgColor="pink">
           <img width="20px"
           src={list}
            />
                <a href="./assets/CV-Olga_Ulrich_EN.pdf" download>Take a look at my resume EN</a> </button>

                <button className="grayBtn" bgColor="pink">
           <img width="20px"
           src={list}
            />
                <a href="./assets/CV-Olga_Ulrich_DE.pdf" download>Take a look at my resume DE</a> </button>
                </div>
          </div>


          <div className="Right">
            <h3>My skills</h3> 
                <div className="skillsSection">
                        <span>Website Creation</span>
                        <span>Fullstack Web dewelopment</span>
                </div>

            <h3>My Stack</h3>
                <div className="stackSection">
                <MyStackCard svgUrl={react} Name={'Redux'} />
                <MyStackCard svgUrl={two} Name={'Django'} />
                <MyStackCard svgUrl={three} Name={'Javascript'} />
                <MyStackCard svgUrl={docker} Name={'Docker'} />
                <MyStackCard svgUrl={four} Name={'React'} />
                <MyStackCard svgUrl={six} Name={'Figma'} />
                <MyStackCard svgUrl={sass} Name={'Saas'} />
                <MyStackCard svgUrl={sc} Name={'Styled Components'} />
                </div>

        

            </div>
          </div>
        </Wrapper>
    )

}
