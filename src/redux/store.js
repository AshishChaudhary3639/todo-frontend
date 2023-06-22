import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as authReducer} from "./authReducer/reducer";
import {reducer as appReducer} from "./appReducer/reducer";
import thunk from 'redux-thunk'
const rootReducer=combineReducers({authReducer,appReducer})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store