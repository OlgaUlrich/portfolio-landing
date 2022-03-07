import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import * as global from '../../GlobalStyle';
import { Footer } from "../footer";
import emailjs from '@emailjs/browser';
import * as Yup from "yup"
import {useFormik, useformik, yupToFormErrors} from "formik"
import envelope from "./svg/envelope.svg"

const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${global.colorMain};
flex-direction: column;   
justify-content: space-between;
align-items: center;


@media only screen and (max-width: 1026px) {
    font-size: 1em;
    padding-bottom: 50%;

    height: 110vh;

    }



.container{
    width: 90%;
    display: flex;
    font-size: 1.5em;
    padding-bottom: 5%;



    
    


    @media only screen and (max-width: 1026px) {
        flex-direction: column;
 
        
        }

}

.titleDiv{
    width: 100%;
    display: flex;
    justify-content:  center;
    align-items: flex-start;
    padding-top: 5%;

    span{
        width: 90%;  
    }
}

.Left{
width: 40%;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: flex-start;

@media only screen and (max-width: 1026px) {
    width:100%;
    padding-top: 0;
    
    }
}

.Right{
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    @media only screen and (max-width: 1026px) {
        width:100%;
      
  
        
        }

    form{
        font-family: 'inter';
        display:flex;
        flex-direction: column;
        width: 100%;
        height: 80%;

        label{
            margin-top: 1em;
        }
        label:first-child{
            margin-top: 0;
        }
        input{
            background-color: ${global.formColor};
            padding-top: 1em;
            padding-left: 1em;
            padding-bottom: 1em;
            border-radius: 3px;
            border: 3px solid ${global.formColor};
            color: #ffffff;
            font-family: 'inter';
        }
        input:focus { 
            border-color:#ffffff;
         }

        textarea{
            font-famimi: calibri;
            padding-left: 1em;
            padding-top: 1em;
            background-color: ${global.formColor};
            min-height: 150px;
            border-radius: 3px;
            border: 3px solid ${global.formColor};
            color: #ffffff;
            font-family: 'inter';
           
        }
        textarea:focus { 
                border-color:#ffffff;
             }
        button{
            margin-top: 3em;
        }
        .counter{
           display: flex;
           width: 100%;
           justify-content: space-between;
          
         
          
           span{
            font-size: 0.7em; 
            flex: 1;
            text-align: end;
           }
        }
        
        
    }
       
    }
.error{
    font-size: 0.5em;
    color: red;
    padding-left: 1.3em;
    flex: 1;
}

.successWrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    content-align: center;
}
.success{
    display: flex;
    justify-content: center;
    content-align: center;
    width: 100%;
    padding-top: 1em;
    img{
        width: 20%;
    }
}
 
}

`

export const ConnectMe = () =>{

    const [countNum, setCountNum] = useState(250)
    const [state, setState] = useState(false)

        const myTextArea = document.getElementById('message')

        useEffect(
            () => {
                setCountNum(values.message.length)
            }
        )

  

    const sendEmail = (nam, em, mas) =>{
        const templateParams = {
            name: nam,
            email: em,
            message: mas

        };
        
        emailjs.send('service_4cin6uc','template_zbbipjc', templateParams, 'VYg0716flf0f0S-mM')
            .then((response) => {
               setState(true);
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });
    }

    const {handleSubmit, handleChange, values, touched, errors, resetForm, isSubmitting, handleBlur} = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().max(30, "Name is too long").required('Required'),
            email: Yup.string().email('Must be a valid email').max(120),
            message: Yup.string().max(250, "Message is long").required('Required')
        }),
  
        onSubmit: ({name, email, message}, onSubmitProps) =>{
            sendEmail(name, email, message);
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()

        }
    })

    return(
        <Wrapper id="contact" className="section">
                            <div className="titleDiv">
                                    <span><h2>Reach <text className="accentText">me</text> out</h2> </span>
                            </div>
            <div className="container">
          
       
          
          <div className="Left">
             

                Do you want to ask me something? <br />
                Just ask me via the contact form <br />

                or <br />
                WhatsApp<text className="accentText">/</text>Phone:<text className="accentText">+41 79 470 84 99</text>


                
                </div>





                <div className="Right">
               {
                    state === true ?
                    <div className="successWrapper">
                       <div> Your message is sended <text className="accentText">successfully</text>!</div>
                        <div className="success">
                        <img src={envelope} alt="envelope" />
                        </div>

                    </div>

                    :

                    <form onSubmit={handleSubmit}>
                    <label for="name">Your name</label>
                    <input id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Max Muller" />
                       <>
                        {errors.name ? 
                            (<div className="error">{errors.name}</div>)
                        : null}
                      </>   

                    <label for="email">Your email</label>
                    <input id="email" 
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                           type="text" 
                           placeholder="max.muller@exaple.com" />
                       <>
                    {errors.email ? (
                            <div className="error">{errors.email}</div>
                        ): null}
                    </>

                    <label for="message">Your message to me</label>
                  
                    <textarea id="message"
                               name="message"
                               placeholder="Your message no longer than 250 char"
                               value={values.message}
                               onChange={handleChange}
                               >
                                 
                               </textarea>
                               <div id="counter" className="counter">
                                            <>
                                    {errors.message ? (
                                            <div className="error">{errors.message}</div>
                                        ): null}
                                    </>
                                   
                                   
                                   <span>{countNum}</span></div>
                              
              
                    <button type="submit" disabled={isSubmitting}>Send message</button>

                 </form>
                
               } 
                

                </div>
     
          </div>
          <Footer />
        </Wrapper>
    )

}