import React from 'react';
import { CritterLabel } from '../CritterLabel/CritterLabel';
import './Critter.css'

export const Critter = (props) => {
    return (
        <div className="critter">
            <img src={props.iconUri} alt="img"></img>
        </div>
    )
}