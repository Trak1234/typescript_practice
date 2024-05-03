import React, { useEffect, KeyboardEvent } from "react";
import {  useState } from "react";
import { ItemType } from "../Accordion/AccordionControlled";
import styles from "../Select/Select.module.css";

type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export function Select(props: SelectPropsType) {

    const [active,setActive] =useState(false)
    const [hoveredElementValue,setHoveredElementValue] =useState(props.value)


    const selectedItem = props.items.find((i) => i.value === props.value);
    const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);

   /*  useEffect( () => {
        hoveredElementValue(props.value);
    }, [props.value]) */


    const togggleItems = () => setActive(!active)

    
    const onItemClick = (value:any) => {
        props.onChange(value);
        togggleItems();
    }

    const onKeyPress = (e:KeyboardEvent<HTMLDivElement>) => {
        console.log('press')
        if( e.key ==='Enter'|| e.key === 'Escape'){
            setActive(false);
        }
    }


  return (
    <>
      {/* <select>
        <option value="">Minsk</option>
        <option value="">Moscow</option>
        <option value="">Kiev</option>
      </select> */}
      <div className={styles.select + " " + (active ? styles.active : '')} onKeyUp ={onKeyPress} tabIndex={0}>
        <span className={styles.main} onClick={togggleItems} >{selectedItem && selectedItem.title}</span>

        <div className={styles.items}>
          {props.items.map((i) => (
            <div 
            onMouseEnter={()=> setHoveredElementValue(i.value)}
            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '' ) }
            key={i.value}
            onClick={()=>{onItemClick(i.value)}}
            >{i.title}</div>
          ))}
        </div>
      </div>
    </>
  );
}
