import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BasePage } from './BasePage';
import { CritterGrid } from '../components/CritterGrid/CritterGrid';

export const SeaCreaturePage = () => {
    const seaCreatures = useSelector((state) => state.seaCreaturesData.seaCreatures);
    const hemisphere = useSelector((state) => state.hemisphere.hemisphere);
    const month = useSelector((state) => state.month.month);
    const hour = useSelector((state) => state.hour.hour);

    useEffect(() => {
        console.log(seaCreatures);
    })

    return (
        <div>
            <BasePage page={'sea'} />
            <CritterGrid data={seaCreatures} month={month} hour={hour} />
        </div>
    )
}