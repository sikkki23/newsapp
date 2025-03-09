import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar.js';
import News from './components/News.js';
 import SelectComponent from './components/SelectComponent.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
//   constructor (props){
//     super(props);
//     console.log('Hello I am News Constrautor AA');
//     this.state = { selectedValue: 'World' };
//     this.handleValueChange = this.handleValueChange.bind(this);
// }
  const pagesize=5;
  const apikey=process.env.REACT_APP_APIKEY;
  const apihost=process.env.REACT_APP_APIHOST;
  const selectedValue='World';
  const [progress,setProgress]=useState(0);


const handleValueChange =(newValue)=> {
    selectedValue=newValue;
    
  };


    return (
      <>
       <BrowserRouter>
       <SelectComponent 
                  onValueChange={handleValueChange} 
                  currentValue={selectedValue}
                />
        <Navbar></Navbar>
        <LoadingBar
        height={3}
        color="#ff9900"
        progress={progress}
      />
   <Routes>
        <Route exact path="/"              element={<News  setProgress={setProgress} apikey={apikey} apihost={apihost} key="general" pagesize={pagesize} country={selectedValue} category="general"/>}> </Route> 
        <Route exact path="/business"      element={<News  setProgress={setProgress} apikey={apikey} apihost={apihost} key="business" pagesize={pagesize} country={selectedValue} category="business"/>}> </Route>
        <Route exact path="/entertainment" element={<News  setProgress={setProgress} apikey={apikey} apihost={apihost} key="entertainment" pagesize={pagesize} country={selectedValue} category="entertainment"/>}> </Route>
        <Route exact path="/general"       element={<News  setProgress={setProgress} apikey={apikey} apihost={apihost} key="generalcat" pagesize={pagesize} country={selectedValue} category="general"/>}> </Route> 
        <Route exact path="/health"        element={<News  setProgress={setProgress} apikey={apikey} apihost={apihost} key="health" pagesize={pagesize} country={selectedValue} category="health"/>}> </Route> 
        <Route exact path="/science"       element={<News  setProgress={setProgress} apikey={apikey} apihost={apihost} key="science" pagesize={pagesize} country={selectedValue} category="science"/>}> </Route> 
        <Route exact path="/sports"        element={<News  setProgress={setProgress} apikey={apikey} apihost={apihost} key="sports" pagesize={pagesize} country={selectedValue} category="sports"/>}> </Route> 
        <Route exact path="/technology"    element={<News  setProgress={setProgress} apikey={apikey} apihost={apihost} key="technology" pagesize={pagesize} country={selectedValue} category="technology"/>}> </Route> 
          
  </Routes>
      </BrowserRouter>
      </>
    )
  
}

export default App
