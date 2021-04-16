import React, { useState, useEffect } from 'react';
import { Button } from './components/Button/Button';
import axios from 'axios';
import moment from 'moment';

const typesOfCritters = ['Fish', 'Sea Creatures', 'Bugs'];

export const HomePage = () => {
    const [fishData, setFishData] = useState({ fish: [] });
    const [bugData, setBugData] = useState({ bugs: [] });
    const [seaCreatureData, setSeaCreatureData] = useState({ seaCreatures: [] });
    const [hemisphere, setHemisphere] = useState('Northern'); // 'Northern' | 'Southern'
    const [month, setMonth] = useState(null); // TODO: default to current
    const [hour, setHour] = useState(null); // TODO: default to current

    useEffect(async() => {
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
    }, []);

    return (
        <div>
            <p>Welcome to Critterpedia!</p>
        </div>
    )
}