import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { useState } from "react";

import { Select } from "./Select";

export default {
  title: "Select stories",
  component: Select,
};

export const BaseExample = () => {
    const [value,setValue] = useState('2');
    return <>
    <Select
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Minsk" },
        { value: "2", title: "Moscow" },
        { value: "3", title: "Kiev" },
      ]}
    />
    
  </>
    


};

export const Withoutvalue = () => {
    const [value,setValue] = useState(null);
    return <>
      <Select
        onChange={setValue}
        value={value}
        items={[
          { value: "1", title: "Minsk" },
          { value: "2", title: "Moscow" },
          { value: "3", title: "Kiev" },
        ]}
      />
      
    </>
      
  
  
    };