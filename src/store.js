import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './reducer/Slice.js'
export const  store=configureStore({
    reducer:{
           counter:counterSlice
    }
})