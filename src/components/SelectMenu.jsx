import React from 'react';
import { useDispatch } from 'react-redux';

export const SelectMenu = (props) => {
    const dispatch = useDispatch();

    const onChange = e => {
        console.log('selected', e.target.value);
        dispatch(props.onSelect(e.target.value))
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