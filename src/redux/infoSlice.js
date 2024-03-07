import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: {
        name: "",
        email: "",
        phone: ""
    }
}

const infoSlice = createSlice({
    name: "info",
    initialState: initialState,
    reducers: {
        setInfo: {
            reducer(state, action) {
                state.info = action.payload
            },
            prepare(name, email, phone) {
                return {
                    payload: {
                        name,
                        email,
                        phone
                    }
                };
            },
        },
        setName(state, action) {
            state.info.name = action.payload;
        },
        setEmail(state, action) {
            state.info.email = action.payload;
        },
        setPhone(state, action) {
            state.info.phone = action.payload;
        }
    }
})

export const { setInfo, setName, setEmail, setPhone } = infoSlice.actions;
export const infoSliceReducer = infoSlice.reducer;
