import React, {Component} from "react";

const Com =()=>{
    return(
        <>
        <h1>This is from the Functional Component.</h1>
        <Com1></Com1>
        <Welcome></Welcome>
        <Welcome1></Welcome1>
        </>
    )
}

class Com1 extends Component{
    render(){
        return(<h1>This is from the Class Component.</h1>)
    }
}

////  arrow functional welcome component

const Welcome = ()=>{
    return(<>
    <h1>This is from the Welcome an arrow function component.</h1>
    </>)
}

//// Normal function component
function Welcome1(){
    return(<h1>This is from Welcome1 from function component.</h1>)
}
    


export default Com;
