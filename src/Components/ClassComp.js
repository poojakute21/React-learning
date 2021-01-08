import React, { Component } from 'react';
import bell from './bell.jpg';
import bellA from './bellA.jpg';

export class ClassComp extends Component {
    styles ={
        fontStyle : "italic",
        color : "purple"
      };
      ButtonChange=() => {
          this.setState({
              message : "Hit the subscribed",
              sub : "Subscribed"
          })
      }

      imageChange=() => {
        this.setState({
            imagURL : bellA,
            message : "Welcome to Learning",
        })
      }
    constructor(props) {
        super(props)
    
        this.state = {
             message :"Subscribe to Simplilearn",
             sub : "Subscribe",
             imagURL : bell
        }
    }
    
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p><img 
                style= {{width: "30px", height:"30px"}} src={this.state.imagURL} 
                onClick={this.imageChange}/></p>
            </div>
        )
    }
}

export default ClassComp
