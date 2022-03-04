import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import { Card } from "./card";
import project from "../about_me/svgs/project.svg"


const Wrapper = styled.div`
width: 100%;
min-height: 70vh;
display: flex;
flex-direction:column;
align-items: center;
background-color: #232734;


@media only screen and (max-width: 1026px) {
    font-size: 1em;
    }



.container{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 5%;
    font-size: 1.5em;
    padding-bottom: 5%;
    


    @media only screen and (max-width: 1026px) {
        flex-direction: column;
        
        }
}
.content-wrapper{
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  
}
.gridBlock{
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-row-gap: 3em;
    grid-column-gap: 3em;

    @media only screen and (max-width: 1026px) {
        grid-template-columns: repeat(1, 60%);
        grid-row-gap: 2em;
        grid-column-gap: 2em;

        }

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 40%);
        grid-row-gap: 2em;
        grid-column-gap: 2em;
    
        }
}



 
}

`

export const MyWorks = () =>{

    return(
        <Wrapper id="works" className="section">
            <div className="container">
        
                <h2>My latest works</h2>
                <div className="content-wrapper">
                <div className="gridBlock">
                       <Card text={'Will be soon'} image={project}/>
                       <Card text={'Will be soon'} image={project}/>
                       <Card text={'Will be soon'} image={project}/>
                     
                </div>
                </div>
              
               
          </div>
        </Wrapper>
    )

}