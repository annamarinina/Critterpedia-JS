import React from 'react';
import './Critter.css';

export const Critter = (props) => {

    return (
        <div className="critter">
            <img src={props.iconUri} alt="img" className={props.available ? "" : "unavailable"}></img>
            <span className="label">{props.label}</span>
        </div>
    )
}