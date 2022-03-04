import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import { ExperienceCard } from "./experienceCard";



const Wrapper = styled.div`
width: 100%;
min-height: 70vh;
display: flex;
flex-direction:column;
align-items: center;
background-color: ${global.colorMain};


@media only screen and (max-width: 1026px) {
    font-size: 1em;
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
width: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;

@media only screen and (max-width: 1026px) {
    width:100%;
    padding-top: 0;
    
    }
}

.Right{
    width: 40%;
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

 
}

`

export const MyExperience = () =>{

    return(
        <Wrapper id="experience" className="section">
            <div className="container">
          <div className="Left">
                <h2>Work experience</h2>

            <ExperienceCard date1={"07.01.2019"} date2={"09.01.2020"} position={"SEO-specialist"} website={"https://korusconsulting.ru"}/>
            <ExperienceCard date1={"06.01.2018"} date2={"07.01.2019"} position={"SEO-specialist"} website={"https://topface.com"}/>
            <ExperienceCard date1={"05.01.2017"} date2={"05.01.2018"} position={"SEO-specialist"} website={"https://promoexpert.pro"}/>


                
                </div>


                <div className="Right">
                <h2>Education</h2>
                <ExperienceCard date1={"11.15.2021"} date2={"02.20.2022"} position={"Student of SIT academy"} website={"https://sit.academy/de"}/>
                <ExperienceCard date1={"09.01.2012"} date2={"07.01.2016"} position={"BEd Information systems and technologies"} />
                

                </div>
          </div>
        </Wrapper>
    )

}