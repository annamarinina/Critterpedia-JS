import React from 'react';
import { useSelector } from 'react-redux';
import { RadioGroup } from '../components/RadioGroup';
import { SelectMenu } from '../components/SelectMenu';
import { setMonth } from '../app/filters/monthSlice';
import { setHour } from '../app/filters/hourSlice';
import { setHemisphere } from '../app/filters/hemisphereSlice';
import { NavButton } from '../components/NavButton/NavButton';

export const BasePage = (props) => {
    const hemisphere = useSelector((state) => state.hemisphere.hemisphere);
    const month = useSelector((state) => state.month.month);
    const hour = useSelector((state) => state.hour.hour);

    return (
        <div>
            <p>Please select your hemisphere:</p>
            <RadioGroup buttons={[
                {label: 'Northern', value: 'Northern'}, 
                {label: 'Southern', value: 'Southern'}]} 
                defaultVal={hemisphere}
                onSelect={setHemisphere} />
            
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
            onSelect={setMonth}
            label={"Please select month of interest"} />

            <SelectMenu options={[
                {label: '0', value: 0},
                {label: '1', value: 1},
                {label: '2', value: 2},
                {label: '3', value: 3},
                {label: '4', value: 4},
                {label: '5', value: 5},
                {label: '6', value: 6},
                {label: '7', value: 7},
                {label: '8', value: 8},
                {label: '9', value: 9},
                {label: '10', value: 10},
                {label: '11', value: 11},
                {label: '12', value: 12},
                {label: '13', value: 13},
                {label: '14', value: 14},
                {label: '15', value: 15},
                {label: '16', value: 16},
                {label: '17', value: 17},
                {label: '18', value: 18},
                {label: '19', value: 19},
                {label: '20', value: 20},
                {label: '21', value: 21},
                {label: '22', value: 22},
                {label: '23', value: 23},
                {label: '24', value: 24}
            ]}
            defaultVal={hour}
            onSelect={setHour}
            label={"Please select hour of interest"} />

            <NavButton label="Fish" path="/fish" selected={props.page == 'fish' ? true : false} />
            <NavButton label="Bugs" path="/bugs" selected={props.page == 'bugs' ? true : false} />
            <NavButton label="Sea Creatures" path="/seacreatures" selected={props.page == 'sea' ? true : false} />
        </div>
    )
}