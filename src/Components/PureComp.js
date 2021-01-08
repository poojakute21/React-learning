import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("pure component render");
        return (
            <div>
                I am Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
