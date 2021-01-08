import React from 'react';
import "./App.css";
import ClassComp from './Components/ClassComp';

class App extends React.Component{
  styles ={
    fontStyle : "bold",
    color : "teal"
  };
  render() {
    return ( 
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <ClassComp></ClassComp>
      </div>
    );
  }
}

export default App;
