import { combineReducers } from "redux";
import {ProductReducer} from "./ProductReducer";
import { UserReducer ,CurrentUserReducer } from "./UserReducer";
import toastMiddleware from "./toastMiddleware";

export const rootReducer = combineReducers({ ProductReducer , UserReducer , CurrentUserReducer,toastMiddleware})