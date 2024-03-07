import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activePage: 1,
}

const pageSlice = createSlice({
    name: "page",
    initialState: initialState,
    reducers: {
        setActivePage(state, action) {
            state.activePage = action.payload;
        }
    }
})

export const { setActivePage } = pageSlice.actions;
export const pageSliceReducer = pageSlice.reducer;
