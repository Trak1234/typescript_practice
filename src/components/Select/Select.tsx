import React from "react";
import { ChangeEvent, useState } from "react";
import { ItemType } from "../Accordion/AccordionControlled";

type SelectPropsType = {
    value:any
    onChange:(value:any) => void
    items: ItemType
}





export const Select = (props:SelectPropsType) => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined);

   const onChange = (e:ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}

   return <select value={parentValue} onChange={onChange}>
       <option >none</option>
       <option value={1}>Minsk</option>
       <option value={1}>Moscow</option>
       <option value={1}>Kiev</option>
   </select>
}