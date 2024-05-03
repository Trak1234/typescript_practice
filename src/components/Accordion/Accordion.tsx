import React, {useReducer, useState} from 'react';
import { TOGGLE_BOOLEAN, reducerSelect } from './reducerSelect';

type AccordionPropsType = {
    titleValue: string
}

export const Accordion = (props: AccordionPropsType) => {
    //let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducerSelect,{collapsed:false})

    

    /* const setCollapseHandler = () => {
        setCollapsed(!collapsed)
    } */

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=> {dispatch({type:TOGGLE_BOOLEAN})}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}