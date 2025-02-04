import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
 import SelectComponent from './components/SelectComponent.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor (props){
    super(props);
    console.log('Hello I am News Constrautor AA');
    this.state = { selectedValue: 'World' };
    this.handleValueChange = this.handleValueChange.bind(this);
}
  pagesize=5;
  apikey=process.env.REACT_APP_APIKEY;
  apihost=process.env.REACT_APP_APIHOST;
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

handleValueChange(newValue) {
    this.setState({ selectedValue: newValue });
    
  };

  render() {

    return (
      <>
       <BrowserRouter>
       <SelectComponent 
                  onValueChange={this.handleValueChange} 
                  currentValue={this.state.selectedValue}
                />
        <Navbar></Navbar>
        <LoadingBar
        height={3}
        color="#00ff00"
        progress={this.state.progress}
      />
   <Routes>
        <Route exact path="/"              element={<News  setProgress={this.setProgress} apikey={this.apikey} apihost={this.apihost} key="general" pagesize={5} country={this.state.selectedValue} category="general"/>}> </Route> 
        <Route exact path="/business"      element={<News  setProgress={this.setProgress} apikey={this.apikey} apihost={this.apihost} key="business" pagesize={5} country={this.state.selectedValue} category="business"/>}> </Route>
        <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} apikey={this.apikey} apihost={this.apihost} key="entertainment" pagesize={5} country={this.state.selectedValue} category="entertainment"/>}> </Route>
        <Route exact path="/"              element={<News  setProgress={this.setProgress} apikey={this.apikey} apihost={this.apihost} key="general" pagesize={5} country={this.state.selectedValue} category="general"/>}> </Route> 
        <Route exact path="/health"        element={<News  setProgress={this.setProgress} apikey={this.apikey} apihost={this.apihost} key="health" pagesize={5} country={this.state.selectedValue} category="health"/>}> </Route> 
        <Route exact path="/science"       element={<News  setProgress={this.setProgress} apikey={this.apikey} apihost={this.apihost} key="science" pagesize={5} country={this.state.selectedValue} category="science"/>}> </Route> 
        <Route exact path="/sports"        element={<News  setProgress={this.setProgress} apikey={this.apikey} apihost={this.apihost} key="sports" pagesize={5} country={this.state.selectedValue} category="sports"/>}> </Route> 
        <Route exact path="/technology"    element={<News  setProgress={this.setProgress} apikey={this.apikey} apihost={this.apihost} key="technology" pagesize={5} country={this.state.selectedValue} category="technology"/>}> </Route> 
          
  </Routes>
      </BrowserRouter>
      </>
    )
  }
}
