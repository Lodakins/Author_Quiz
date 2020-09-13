import React from 'react';
import ReactDOM from 'react-dom';


function Click ({handleClick}){
    return (<div>
        <button style={{color:"red",backgroundColor:"green"}} onClick={(e)=>{handleClick('A');}}> A</button>
        <button onClick={(e)=>{handleClick('B');}}> B</button>
        <button onClick={(e)=>{handleClick('C');}}> B</button>
        </div>
    )
}

export default Click;