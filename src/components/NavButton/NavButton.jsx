import React from 'react';
import { useHistory } from 'react-router-dom';
import './NavButton.css';

export const NavButton = (props) => {
    const history = useHistory();
    return (
        <button className="button" onClick={() => history.push(props.path)}>{props.label}</button>
    )
}