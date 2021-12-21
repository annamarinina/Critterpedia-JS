import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BasePage } from './BasePage';
import { CritterGrid } from '../components/CritterGrid/CritterGrid';

export const BugPage = () => {
    const bugs = useSelector((state) => state.bugData.bugs);
    const hemisphere = useSelector((state) => state.hemisphere.hemisphere);
    const month = useSelector((state) => state.month.month);
    const hour = useSelector((state) => state.hour.hour);

    useEffect(() => {
        console.log(bugs);
    })

    return (
        <div>
            <BasePage page={'bugs'} />
            <CritterGrid data={bugs} month={month} hour={hour} />
        </div>
    )
}