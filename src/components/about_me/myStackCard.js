import React from "react"
import styled from 'styled-components'
import { parse } from 'svg-parser';

const Card = styled.div`
width: 150px;
height: 150px;
display: flex;
flex-direction: column;
padding:0.4em;
@media only screen and (max-width: 1026px) {
    width: 50px;
    max-height: 50px;
    margin-right: 1em;

    }
.svgPart{
    width: 80%;
    max-height: 80%;
    margin: auto;
    filter: grayscale(100%);
    transition: filter 10sec;
    @media only screen and (max-width: 1026px) {
        width: 100%;
        max-height: 100%;
        }
}
.svgPart:hover{
    filter: grayscale(0%);
}

.Name{
    width: 100%;
    text-align: center;
    @media only screen and (max-width: 1026px) {
       display:none;
        
        }
}
`

const MyStackCard = (props) =>{

    return(
        <Card>
            <img className="svgPart" style={{'color':'red'}}
           src={props.svgUrl}
            />
            <div className="Name">
                {props.Name}
            </div>

        </Card>
        
    )

    }

export default MyStackCard