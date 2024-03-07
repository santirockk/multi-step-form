import { configureStore } from "@reduxjs/toolkit";
import { pageSliceReducer } from "./pageSlice";
import { planSliceReducer } from "./planSlice";
import { infoSliceReducer } from "./infoSlice";

export const store = configureStore({
    reducer:{
        page: pageSliceReducer,
        plan: planSliceReducer,
        info: infoSliceReducer
    }
})





