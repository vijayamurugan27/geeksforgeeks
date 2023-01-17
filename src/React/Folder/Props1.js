import React, { Component } from "react";

function Props1(){
    return (
        <div>
            <h1>This is from Props1 file.</h1>
            <Propsex name = "Ramu"></Propsex>
            <Propex1 user = "Kavin"></Propex1>
            <Welcome name = "rahul"></Welcome>
        </div>
    )
}

function Propsex(props){
    return(
        <div>
            <h2>This is the props-{props.name} </h2>
        </div>
    )
}

const Welcome = (props)=>{
    return(<>
    {props.name}
    <h1>This is from the Welcome an arrow function component.</h1>
    </>)
}


class Propex1 extends Component{
    render(){
        return(
            <>
            <h1>
                This is from component {this.props.user} 
            </h1>
            </>
        )
    }
}


export default Props1;

