import { ActionTypes } from "../ActionTypes/CountActionType";

const initialState = {
    count: 10
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_COUNT:
            return {
                count: state.count + 1
            }
        case ActionTypes.DECREMENT_COUNT:
            return {
                count: state.count - 1
            }
        case ActionTypes.RESET_COUNT:
            return {
                count: 0
            }

        default:
            return state
    }
}