import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./reducer/Slice";

export const  store=configureStore({
    reducer:{
           counter:counterSlice.reducer,
         
    }
})