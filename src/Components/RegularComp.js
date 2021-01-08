import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log("regular component render");
        return (
            <div>
                I am Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
