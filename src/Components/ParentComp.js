import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'React'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'React'
            });
        }, 3000);
    }
    render() {
        console.log("Parent component render");
        return (
            <div>
                <RegularComp name ={this.state.name}></RegularComp>
                <PureComp name={this.state.name} ></PureComp>
            </div>
        )
    }
}

export default ParentComp
