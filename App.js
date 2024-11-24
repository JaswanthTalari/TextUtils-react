
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs';
import { useState } from 'react';
//import AlertOn from './components/AlertOn';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [Mode , setMode] = useState('light')

  // const [alert, setAlert] = useState(null)


  // const ShowAlert = (message, type) =>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   } )

  
  
  let toggleMode =() =>{
    if(Mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";


    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#042743";

    }

    
    }
   

  
  return (
    <>
      <div>
        <Navbar Mode = {Mode} toggleMode ={toggleMode}  ></Navbar>
            <TextForm title ="Welcome To TextUtiles"   ></TextForm>
      </div>
{/* 
    <BrowserRouter>


        <Switch>
          <Route exact path="/about">
            <AboutUs/>
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
        </div>
      
      </BrowserRouter> */}

    </>
  );
}

export default App;

