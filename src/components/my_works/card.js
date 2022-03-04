import React, { useState } from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';



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
            max-width: 200px;
            height: 100px;
            }

            @media only screen and (max-width: 600px) {
                max-width: 100px;
                height: 80px;
                }
     
    }
    .bottom{
        width: 100%;
        height: 50%;

        .textWrapper{
            padding: 0.5em;
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
                </div>

                {shown === true ? 
                    <button style={{'z-index':'1000'}}>See project</button>
                    :
                    <button style={{'z-index':'-999'}}>See project</button>
              }
           
                </div>
       

   
        </Wrapper>
                
              </>
    )

}