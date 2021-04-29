import React, { useState } from 'react';
import { Radio } from 'antd';

export const RadioGroup = (props) => {
    const [value, setValue] = useState(props.defaultVal);

    console.log(props.buttons)

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    
      return (
        <Radio.Group onChange={onChange} value={value}>
            {props.buttons.map( ({label, value}) => <Radio value={value} key={value + '_' + label}>{label}</Radio>)}
        </Radio.Group>
      );
}