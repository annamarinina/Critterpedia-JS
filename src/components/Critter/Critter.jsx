import React from 'react';
import './Critter.css'

export const Critter = (props) => {
    return (
        <div className="critter">
            <img src={props.imgUri} alt="img"></img>
            <p className="label">{props.label}</p>
        </div>
    )
}