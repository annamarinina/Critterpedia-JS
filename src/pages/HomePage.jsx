import React from 'react';
import { Button } from '../components/Button/Button';

const typesOfCritters = ['Fish', 'Sea Creatures', 'Bugs'];

export const HomePage = () => {
    return (
        <div>
            <p>Welcome to Critterpedia!</p>
            {typesOfCritters.map((critter, index) => 
                <Button label={critter} key={index} path={'/' + critter}></Button>
            )}
        </div>
    )
}