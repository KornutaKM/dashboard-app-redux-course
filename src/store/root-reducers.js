import { combineReducers } from "redux";
import {positionsReducer} from './positions/positions-reducer'
import { filterReducer } from "./filters/filters-reducer";

export const rootReducers = combineReducers({
  positions: positionsReducer,
  filter: filterReducer
})