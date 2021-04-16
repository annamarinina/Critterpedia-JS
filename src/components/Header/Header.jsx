import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <Link to="/">
            <img className="icon" src={'https://www.svgrepo.com/show/12225/leaf-butterfly.svg'} alt="butterfly" />
            </Link>
            <h1 className="heading">Critterpedia</h1>
        </div>
    )
}
