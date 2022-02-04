import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducers";

const rootReducer = combineReducers({reducer:Reducer});

export const Store =  createStore(rootReducer, applyMiddleware(thunk));