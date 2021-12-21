import React, { useEffect } from 'react';
import './CritterGrid.css';
import { Critter } from '../Critter/Critter';

export const CritterGrid = (props) => {

    const monthArrayHemisphere = props.hemisphere == 'Northern' ? "month-array-northern" : "month-array-southern";

    const filterData = (data) => {
        data = data.filter(f => f.availability[monthArrayHemisphere].includes(Number(props.month)));
        data = data.filter(f => f.availability["time-array"].includes(Number(props.hour)));
        console.log('filtered data: ', data);
        return data;
    }

    return(
        <table>
            {filterData(props.data).map(critter => <tr><Critter label={critter.name["name-USen"]} iconUri = {critter["icon_uri"]} /></tr>)}
        </table>
    )
}