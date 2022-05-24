import React, { useState } from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import figma from "../about_me/svgs/6.svg";
import repo from "./jpg/gth.svg";



const Wrapper = styled.div`


.container{
    min-width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${global.colorMain};
    border-radius: 0.3em;
    padding-top: 0;
    position: relative;
    justify-content: center;
    align-items: center;
 
   
    .top{
        padding-top: 0;
        width: 100%;
        height: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        height: 200px;
        border-radius: 0.3em;


    

        @media only screen and (max-width: 1026px) {
            max-width: 90%;
            min-height: 100px;
            }

            @media only screen and (max-width: 600px) {
                max-width: 90%;
                min-height: 80px;
                }
     
    }
    .bottom{
      
        padding: 1rem;


        .textWrapper{
           
        }

        .description{
            padding-top: 2rem;
            padding-bottom: 1rem;
            font-size: 1.5rem;
        }

        img{
            width:1.5rem;
        }

        .stack{
            background-color: ${global.colorAccent};
            padding:0.1em;
            border-radius: 0.5rem;
            margin-right: 0.5em;
            font-size: 1rem;
            
            @media only screen and (max-width: 1026px) {
                margin-top: 0.3em;
                }

                &:last-child{
                    margin-right: 0;
                }
        }

       
    }

}

@media only screen and (max-width: 1026px) {
    font-size: 1em;
    }
}

button{
    position: absolute;
    left: 28%;
 

    
}

`

export const Card = (props) =>{
const [shown, setIsShown] = useState(false)
    return(
        <>
        <Wrapper>
            <div className="container" 
            onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {shown === true ? 
                <div className="top" style={{'filter': 'blur(4px)', 'backgroundImage': `url(${props.image})`}}>
                   
                </div>
                  :

                  <div className="top" style={{'backgroundImage': `url(${props.image})`}}>
                   
                </div>
                }
     
              
                <div className="bottom">
                    <div className="textWrapper">
                    {props.text}
                    </div>
                    <div className="description">
                    {props.description}
                    </div>
                    <div>
                   {console.log(props.stack.arr[0])}
                   
                            {Array.from(props.stack.arr).map((item)=>{
                                return(
                                <span className="stack">
                                    {item}
                                </span>
                                )

                            })}
              
                    </div>
                    <div className="rep">
                    <a href={props.rep }><img src={repo} alt="github"></img></a>
                    </div>
                    <div className="fig">
                    {props.fig ?
                    <a href={props.fig }><img src={figma} alt="fig"></img></a> :
                    <></>
                
                }
                    </div>

                </div>

                {shown === true ? 
                    <button style={{'z-index':'1000'}}>  <a href={props.link}>See project</a></button>
                    :
                    <button style={{'z-index':'-999'}}>See project</button>
              }
           
                </div>
       

   
        </Wrapper>
                
              </>
    )

}