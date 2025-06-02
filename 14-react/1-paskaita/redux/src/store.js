import { createContext } from "react";
import { counterReducer } from "./counterReducers";
import {configureStore} from "@reduxjs/toolkit";


// export const store = createStore(counterReducer) senas budas

export const store =  configureStore({reducer: counterReducer})