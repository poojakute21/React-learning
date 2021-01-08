import React from 'react';

function FunctionProps(props){
    return (
    <div>
        <h3>This is funtional Component</h3>,
        <h3>Hello {props.name} from {props.place} ! This is  Component 1</h3>
    </div>
    );
    
}

export default FunctionProps;