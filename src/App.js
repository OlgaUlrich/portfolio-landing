import logo from './logo.svg';
import './App.css';
import { AppMain } from "./AppStyle";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from './components/header/header';
import { MobileMenuNav } from './components/mobile_menu/mobile_menu'
import { IntroScreen } from './components/intro';
import { AboutMe } from './components/about_me';
import { ConnectMe } from './components/connect';
import { MyExperience } from './components/experience';
import { MyWorks } from './components/my_works';
import React, { useEffect } from 'react';


function App() {

const li = document.querySelectorAll(".links")
const sections = document.querySelectorAll(".section")

function activeMenu(){

}

activeMenu()
window.addEventListener("scroll", activeMenu)


  return (

    <>
  
    <GlobalStyle />
    <AppMain>
   
    <div className="App">
    <Header />
    <div id='scrollContainer'>
       <IntroScreen />
     
       <AboutMe />
       <MyExperience />
       <MyWorks />
       <ConnectMe />
       <MobileMenuNav />
    </div>
       
    </div>


    </AppMain>


    </>
  );
}

export default App;
