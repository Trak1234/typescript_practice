// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta } from "@storybook/react";

import { AccordionControlled } from "./AccordionControlled";
import { useState } from "react";

import { action } from "@storybook/addon-actions";

/* const meta: Meta<typeof AccordionControlled> = {
  component: AccordionControlled,
}; */
export default {
  component: AccordionControlled,
};
/* type Story = StoryObj<typeof AccordionControlled>

export const FirstStory: Story = {
    args: {
        titleValue:'hello',
        collapsed:true,
        onChange:() => {}
    }
} */

const onChangeHandler = action("onChange");
const onClickCallback= action('some item was clicked')


export const CollapsedAccordion = () => {
  return (
    <div>
      <AccordionControlled
        titleValue={"Collapsed"}
        collapsed={true}
        onChange={onChangeHandler}
        items={[]}
        onClick={onClickCallback}
      />
    </div>
  );
};

export const OpenAccordion = () => {
  return (
    <div>
      <AccordionControlled
        titleValue={"Open Accordion"}
        collapsed={false}
        onChange={onChangeHandler}
        items={[
          { title: "Dimych", value: 1 },
          { title: "Valera", value: 2 },
          { title: "Artem", value: 3 },
          { title: "Viktor", value: 4 },
        ]}
        onClick={onClickCallback}
      />
    </div>
  );
};

export const Accordion = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <AccordionControlled
        titleValue={"Open Accordion"}
        collapsed={collapsed}
        onChange={() => {
          setCollapsed(!collapsed);
        }}
        items={[
          { title: "Dimych", value: 1 },
          { title: "Valera", value: 2 },
          { title: "Artem", value: 3 },
          { title: "Viktor", value: 4 },
        ]}
        onClick={onClickCallback}
      />
    </div>
  );
};
