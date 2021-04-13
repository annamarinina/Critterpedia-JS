import React from 'react';
import { useHistory } from 'react-router-dom';
import './Button.css';

export const Button = (props) => {
    const history = useHistory();
    return (
        <button className="button" onClick={() => history.push(props.path)}>{props.label}</button>
    )
}