import React, { ChangeEvent, useState } from "react";

import { OnOff } from "../components/OnOff/OnOff";


export default {
    title:'input',
    component:<OnOff/>
    
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}

    return <input value={parentValue} onChange={onChange} />
}




export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)}

    return <input type="checkbox" checked={parentValue} onChange={onChange} />
}


export const ControlledSelect = () => {
     const [parentValue, setParentValue] = useState<string|undefined>(undefined);

    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}

    return <select value={parentValue} onChange={onChange}>
        <option >none</option>
        <option value={1}>Minsk</option>
        <option value={1}>Moscow</option>
        <option value={1}>Kiev</option>
    </select>
}