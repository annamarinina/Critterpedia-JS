import React, { useState, useEffect } from 'react';
import './CritterGrid.css';
import { Critter } from '../Critter/Critter';

export const CritterGrid = (props) => {

    //props: critterType: fish | bugs | sea 

    const [filteredData, setFilteredData] = useState([]);

    const filterData = (data) => {
        data = data.filter(f => f.availability[monthArrayHemisphere].includes(Number(props.month)));
        data = data.filter(f => f.availability["time-array"].includes(Number(props.hour)));
        console.log('filtered data: ', data);
        return data;
    }

    useEffect(() => {
        setFilteredData(filterData(props.data));
    })

    const monthArrayHemisphere = props.hemisphere == 'Northern' ? "month-array-northern" : "month-array-southern";

    return(
        <div className={`gridContainer ${props.critterType == 'sea' ? "eightColumns" : "sixteenColumns"}`}>
            {props.data.map(critter => 
            <div className="gridItem">
                <Critter 
                    label={critter.name[`${props.language}`]} 
                    iconUri={critter["icon_uri"]}
                    available={filteredData.includes(critter) ? true : false} />
            </div>)}
        </div>
    )
}