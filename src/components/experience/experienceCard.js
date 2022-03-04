import React from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';



const Wrapper = styled.div`


.container{
    width: 50%;
    font-size: 1em;
    display: flex;
    background-color: ${global.colorMain};
    border-radius: 0.3em;
    padding-top: 0;
    margin-bottom: 1em;
    align-items: flex-start;

.Left{
    padding: 0;
    margin: 0;

    min-width: 180px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
        .Date{
            width: 100%;
            font-size: 0.5em;
        }
}


.Right{
    padding: 0;
    margin: 0;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
     
}
 


.Position{
    font-weight: bold;
    text-transform: capitalize;

}



.LinkClass{
    color: ${global.colorAccent};
    text-decoration: none;
}

}

`

export const ExperienceCard = (props) =>{


            const returnFullDate = (date) =>{
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
            ];

            const d = new Date(date);
            return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
            
        }

    return(
        <>
        <Wrapper>
            <div className="container">
     
     <div className="Left">
              <div className="Date">{returnFullDate(props.date1)} - <br/> {returnFullDate(props.date2)} </div>
     </div>

     <div className=">Right">
              <div className="Position">{props.position}</div>
              <div className="Website">
                {
                    props.website ?
                    <a className="LinkClass" href={props.website}>{props.website.replace(/(^\w+:|^)\/\//, '')}</a>
                    :
                    ""


                }  
                  
              </div>
    </div>
           
           
                </div>
       

   
        </Wrapper>
                
              </>
    )

}