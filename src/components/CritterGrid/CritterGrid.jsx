import React, { useEffect } from 'react';
import './CritterGrid.css';
import { Critter } from '../Critter/Critter';

export const CritterGrid = (props) => {

    const filterData = (data) => {
        data = data.filter(f => f.availability["month-array-northern"].includes(Number(props.month)));
        data = data.filter(f => f.availability["time-array"].includes(Number(props.hour)));
        return data;
    }

    return(
        <table>
            {filterData(props.data).map(critter => <tr><Critter label={critter.name["name-USen"]} iconUri = {critter["icon_uri"]} /></tr>)}
        </table>
    )
}