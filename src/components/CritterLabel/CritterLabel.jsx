import React from 'react';
import './CritterLabel.css'

export const CritterLabel = (props) => {
    return (
        <div className="label">
            <p className="text">{props.critterName}</p>
        </div>
    )
}