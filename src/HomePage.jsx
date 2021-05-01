import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RadioGroup } from './components/RadioGroup';
import { SelectMenu } from './components/SelectMenu';
import moment from 'moment';

export const HomePage = () => {
    const [fishData, setFishData] = useState({ fish: [] });
    const [bugData, setBugData] = useState({ bugs: [] });
    const [seaCreatureData, setSeaCreatureData] = useState({ seaCreatures: [] });
    const [hemisphere, setHemisphere] = useState('Northern'); // 'Northern' | 'Southern' TODO: make dynamic
    const [month, setMonth] = useState(moment().month() + 1);
    const [hour, setHour] = useState(moment().hour());

  /*  useEffect(async() => {
        const fishURL = 'https://acnhapi.com/v1/fish';
        const bugURL = 'https://acnhapi.com/v1/bugs';
        const seaURL = 'https://acnhapi.com/v1/sea';

        const fishReq = axios.get(fishURL);
        const bugReq = axios.get(bugURL);
        const seaReq = axios.get(seaURL);

        axios.all([fishReq, bugReq, seaReq]).then(axios.spread((...responses) => {
            const fishRes = responses[0];
            const bugRes = responses[1];
            const seaRes = responses[2];

            setFishData(fishRes.data);
            setBugData(bugRes.data);
            setSeaCreatureData(seaRes.data);
        }));
    }, []); */

    return (
        <div>
            <p>Welcome to Critterpedia!</p>

            <p>Please select your hemisphere:</p>
            <RadioGroup buttons={[
                {label: 'Northern', value: 'Northern'}, 
                {label: 'Southern', value: 'Southern'}]} 
                defaultVal={hemisphere} />
            
           <SelectMenu options={[
                {label: 'January', value: 1},
                {label: 'February', value: 2},
                {label: 'March', value: 3},
                {label: 'April', value: 4},
                {label: 'May', value: 5},
                {label: 'June', value: 6},
                {label: 'July', value: 7},
                {label: 'August', value: 8},
                {label: 'September', value: 9},
                {label: 'October', value: 10},
                {label: 'November', value: 11},
                {label: 'December', value: 12}
            ]}
            defaultVal={month}
            label={"Please select month of interest"} />

        </div>
    )
}