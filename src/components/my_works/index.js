import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import { Card } from "./card";
import project from "../about_me/svgs/project.svg";
import first from "./jpg/1.png"
import second from "./jpg/2.png"
import third from "./jpg/3.png"
import fourth from "./jpg/4.png"


const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction:column;
align-items: center;
background-color: #232734;
margin-bottom: 5%;


@media only screen and (max-width: 1026px) {
    font-size: 1em;
   

    }



.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5%;
    font-size: 1.5em;
    padding-bottom: 5%;
    


    @media only screen and (max-width: 1026px) {
        flex-direction: column;
 
        
        }
}
.content-wrapper{
    width:80%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    @media only screen and (max-width: 1026px) {
        width:80%;
        display: flex;
        align-items: center;
        justify-content:  center;
     
    }

    @media only screen and (max-width: 600px) {
        width:100%;
        align-items: center;
    }
}
.gridBlock{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 6rem;
    grid-column-gap: 2rem;
    width: 100%;
    height: 100%;
    padding-bottom: 3rem;

    @media only screen and (max-width: 1026px) {
        display: block;     

        div{
            margin-bottom: 1rem;
        }

        }

    @media only screen and (max-width: 600px) {
        display: block;     

        div{
            margin-bottom: 1rem;
        }
      
      
    
        }
}



 
}

`

export const MyWorks = () =>{

    return(
        <Wrapper id="works" className="section">
            <div className="container">
        
               <div className=""></div> 
                <div className="content-wrapper">
                <h2>My latest works</h2>
                <div className="gridBlock">
                       <Card text={'Template for HealthApp'} image={fourth} description="Laconic template is done with SASS and Splide js library" link="https://inquisitive-shortbread-32c289.netlify.app/" stack={{arr:["SASS", "Splide js"]}} fig="https://www.figma.com/file/EWmzcVkd7qbP5Nf7iMvuqP/Trafalgar-Landing-Page" rep="https://github.com/OlgaUlrich/Trafalgar_template"/>
                       <Card text={'Hangman'} image={third} description="Legendary game is written on JS and uses random-word-api for word generation" link="https://nimble-griffin-d03b1e.netlify.app/" stack={{arr:["JS", "Rest API"]}} rep="https://github.com/OlgaUlrich/hangman_js/"/>
                       <Card text={'Contact List'} image={second} description="Usefull app builded with React and Django. Here you can create, update, read, delete information " link="https://melodious-conkies-10b84d.netlify.app/"  stack={{arr:["JS", "React", "Django"]}} rep="https://github.com/OlgaUlrich/contacts_frontend"/>
                       <Card text={'Chart report'} image={first} description="Chart report builded with React within Recharts library " link="https://lambent-choux-0fddab.netlify.app/" stack={{arr:["React", "Recharts"]}} rep="https://github.com/OlgaUlrich/Graphics-"/>
                     
                </div>
                </div>
              
               
          </div>
        </Wrapper>
    )

}