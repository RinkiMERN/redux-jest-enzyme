import {ActionTypes} from "../ActionTypes/CountActionType"

export const incrementCount = ()=>{
    return {
        type: ActionTypes.INCREMENT_COUNT
    }
}

export const decrementCount =()=>{
    return {
        type: ActionTypes.DECREMENT_COUNT
    }
}

export const resetCount =()=>{
    return {
        type: ActionTypes.RESET_COUNT
    }
}