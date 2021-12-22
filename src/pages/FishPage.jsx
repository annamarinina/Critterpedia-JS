import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BasePage } from './BasePage';
import { CritterGrid } from '../components/CritterGrid/CritterGrid';

export const FishPage = () => {
    const fish = useSelector((state) => state.fishData.fish);
    const language = useSelector((state) => state.language.language);
    const hemisphere = useSelector((state) => state.hemisphere.hemisphere);
    const month = useSelector((state) => state.month.month);
    const hour = useSelector((state) => state.hour.hour);

    useEffect(() => {
        console.log(fish);
    })

    return (
        <div>
            <BasePage page={'fish'} />
            <CritterGrid data={fish} month={month} hour={hour} hemisphere={hemisphere} language={language} />
        </div>
    )
}