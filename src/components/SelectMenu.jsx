import React, { useState } from 'react';

export const SelectMenu = (props) => {
    const [value, setValue] = useState(props.defaultValue);

    const onChange = e => {
        console.log('selected', e.target.value);
        setValue(e.target.value);
      };

    return (
      <div>
        <label for="select">{props.label}</label>
        <select id="select" onChange={onChange}>
          {props.options.map(({label, value}) => <option value={value} key={value + '_' + label} selected={props.defaultVal == value ? true:false}>{label}</option>)}
        </select>
      </div>
    );

}