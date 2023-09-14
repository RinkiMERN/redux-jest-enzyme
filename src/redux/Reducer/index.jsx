import {combineReducers} from "@reduxjs/toolkit"
import { countReducer } from "./reducer"


const reducers = combineReducers({
    count: countReducer
})

export default reducers

