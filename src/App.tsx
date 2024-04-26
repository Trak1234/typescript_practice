import React, {useState} from 'react';
import './App.css';

import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {RatingControlled, RatingValueType} from "./components/Rating/RatingControlled";

import {OnOffControlled} from "./components/OnOff/OnOffControlled";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    //let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            <OnOffControlled on={switchOn} onChange={setSwitchOn}/>
            <Accordion titleValue={"My Accordion"}/>
            {/* <AccordionControlled titleValue={"My Accordion"}
                                collapsed={accordionCollapsed}
                                onChange={() => {
                                    setAccordionCollapsed(!accordionCollapsed)
                                }}/> */}
            <Rating value={0} onClick={()=>{}}/>
            <RatingControlled value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

export default App;
