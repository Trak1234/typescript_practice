import React, {useState} from 'react';

type OnOffPropsType = {

}


export const OnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    const onOffWrapper = {
        display: "flex",
        alignItems: "center"
    }

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }


        return (
        <div style={onOffWrapper}>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};