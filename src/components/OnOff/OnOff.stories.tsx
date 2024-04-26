import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { useState } from 'react';

import { OnOffControlled } from './OnOffControlled';


export default  {
    title:'OnOff stories',
    component: OnOffControlled

}

export const OnMode = () => <OnOffControlled on={true} onChange={action('on_of to click')} /> 
export const OfMode = () => <OnOffControlled on={false} onChange={action('on_of to click')} /> 

export const ModeChanging = () => {
    
    const [value,setValue] = useState<boolean>(true)
    return <OnOffControlled on={value} onChange={setValue}/>
    
}
