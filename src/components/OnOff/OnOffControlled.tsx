import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export const OnOffControlled = (props: OnOffPropsType) => {

    const onOffWrapper = {
        display: "flex",
        alignItems: "center"
    }

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div style={onOffWrapper}>
            <div style={onStyle} onClick={()=>props.onChange(true)}>On
            </div>
            <div style={offStyle} onClick={()=>props.onChange(false)}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};