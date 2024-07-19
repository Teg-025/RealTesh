import React from "react";
import "./Button.css";

export default function Button(props){
    return(
        <button style={{backgroundColor: props.backgroundColor}}>{props.text}</button>
    )
}