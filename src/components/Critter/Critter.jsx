import React, { useState } from 'react';
import './Critter.css';
import ReactModal from 'react-modal';

export const Critter = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        console.log(isModalOpen);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log(isModalOpen);
    }

    return (
        <div>
        <div className="critter" onClick={handleOpenModal}>
            <img src={props.iconUri} alt="img" className={`icon ${props.available ? "" : "unavailable"}`}></img>
            <span className="label">{props.label}</span>
        </div>
        <div className="modalContainer">
        <ReactModal 
            className="modal"
            isOpen={isModalOpen} 
            ariaHideApp={false} 
            shouldCloseOnEsc={true} 
            shouldCloseOnOverlayClick={true}>
                <div className="left">
                    <h2>{props.label}</h2>
                    <img className="img" src={props.imgUri}></img>
                </div>
                <div className="right">
                    <button onClick={handleCloseModal}>X</button>
                <div>
                <div>
                    <p className="heading">Location</p>
                    <p>{props.location}</p>
                </div>
                <div>
                    <p className="heading">Rarity</p>
                    <p>{props.rarity}</p>
                </div>
                <div>
                    <p className="heading">Price</p>
                    <p>{props.price} ... {props.specialPrice} when sold to {props.purchaser}</p>
                </div>
                </div>
                </div>
        </ReactModal>
        </div>
        </div>
    )
}