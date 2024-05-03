


export const TOGGLE_BOOLEAN = 'TOGGLE_BOOLEAN'

type StateType = {
    collapsed:boolean
    
}

type ActionType = {
    type:string
    
}



export const reducerSelect = (state:StateType, action:ActionType ):StateType => {

    switch(action.type){
        case TOGGLE_BOOLEAN:
            state.collapsed = !state.collapsed;
            return state 
        default: 
            throw new Error('Bad action type')
    }
    return state


}