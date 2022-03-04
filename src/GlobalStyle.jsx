import styled, { createGlobalStyle } from "styled-components";
import inter from './components/assets/fonts/Inter-Bold.ttf';
import roboto from './components/assets/fonts/RobotoSlab-Black.ttf'

export const colorMain = "#353849"
export const colorSecondMain = "#232734"
export const colorText = "#ffffff"
export const colorAccent = "#03cc90"
export const formColor = "#3f4354"



export const GlobalStyle = createGlobalStyle`


@font-face {
    font-family: 'inter';
    src: url(${inter});
}
@font-face {
    font-family: 'roboto-slab';
    src: url(${roboto});
}

body, html{
    height: 100vh;
}

body{
   
    width: 100%;
    margin: 0;
    padding: 0;
}
html{
     scroll-behavior: smooth;
     margin: 0;
     padding: 0;
     width: 100%;
}
.Logo{
    font-family: roboto-slab;

  
}
h2{
    font-weight: 800;
    font-size: 2em;
    text-transform:uppercase;
}
h3{
    font-weight: 600;
    font-size: 1.5em;
    text-transform:uppercase;
}

.accentText{
    color: ${colorAccent};
}

button{
    background-color:  ${colorAccent};
    color: ${colorMain};
    padding: 1em;
    border: 3px solid ${colorAccent};
    cursor: pointer;
    font-size: 0.6em;

    a{
        text-decoration: none;
        color: ${colorMain};
    }

}
.outline{
    background-color: ${colorMain};
    color:  ${colorAccent};
    border: 3px solid ${colorAccent};

    a{
        text-decoration: none;
        color: ${colorText};
    }
}
.grayBtn{

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #ffffff;
    border: 3px solid #ffffff;
    font-size: 1em;
    img{
        align-self: center;
        padding-right: 0.3em;
    }
    a{
        text-decoration: none;
        color: #ffffff;
    }
}

.scrollContainer{
    width: 100%;
}

input:focus { 
    outline: none;
 }
 textarea:focus { 
    outline: none;
 }

`


