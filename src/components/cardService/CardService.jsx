import React from "react";
import "./CardService.css";
import Button from "../button/Button";

export default function CardService(props){
    return(
        <div className="card">
            <img className="card-img" src={props.img} alt="alt" />
            <div className="card-head">{props.head}</div>
            <div className="card-desc">{props.desc}</div>
            <Button text= {props.buttonTxt} />
        </div>
    )
}
