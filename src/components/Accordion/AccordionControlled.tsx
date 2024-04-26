import React, {useState} from 'react';

export type ItemType = {
    title:string
    value:any
    
}


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items:ItemType[]
    onClick:(value:any)=>void
}

export const AccordionControlled = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>-- {props.title} --</h3>
    )
}

type AccordionBodyType = {
    items:ItemType[]
    onClick:(value:any)=>void
}


function AccordionBody(props:AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i,index) => <li onClick={()=>{props.onClick(i.value)}}>{i.title}</li>)}
        </ul>
    )
}