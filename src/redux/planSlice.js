import { createSlice } from "@reduxjs/toolkit";

const monthly = {
    short: "mo",
    plans: {
        arcade: {plan: "Arcade", price: 9, type:"Monthly", short:"mo"},
        advanced: {plan: "Advanced", price: 12, type:"Monthly", short: "mo"},
        pro: {plan: "Pro", price: 15, type:"Monthly", short: "mo"}
    },
    addons: {
        service: {addon: "Online service", price: 1, id:"service", short:"mo"},
        storage: {addon: "Larger storage", price: 2, id:"storage", short:"mo"},
        profile: {addon: "Customizable profile", price: 2, id:"profile", short:"mo"}

    },
}

const yearly = {
    short: "yr",
    plans: {
        arcade: {plan: "Arcade", price: 90, type:"Yearly", short:"yr"},
        advanced: {plan: "Advanced", price: 120, type:"Yearly", short:"yr"},
        pro: {plan: "Pro", price: 150, type:"Yearly", short:"yr"}
    },
    addons: {
        service: {addon: "Online service", price: 10, id:"service", short:"yr"},
        storage: {addon: "Larger storage", price: 20, id:"storage", short:"yr"},
        profile: {addon: "Customizable profile", price: 20, id:"profile", short:"yr"}
    },
}


const initialState = {
    option: "monthly",
    options: {...monthly},
    plan: monthly.plans.arcade,
    addons: {
        service: monthly.addons.service,
        storage: monthly.addons.storage
    },
    total: 0
}


const planSlice = createSlice({
    name: "plan",
    initialState: initialState,
    reducers: {
        setOption(state, action) {
            state.option = action.payload;
        },
        setOptions(state, action) {
            if (action.payload === "yearly") {
                state.options = {...yearly}
            } else {
                state.options = {...monthly}
            }
        },
        setPlan(state, action) {
            switch (action.payload) {
                case "arcade_mo":
                    state.plan = monthly.plans.arcade;
                    break;
                case "advanced_mo":
                    state.plan = monthly.plans.advanced;
                    break;
                case "pro_mo":
                    state.plan = monthly.plans.pro;
                    break;
                case "arcade_yr":
                    state.plan = yearly.plans.arcade;
                    break;
                case "advanced_yr":
                    state.plan = yearly.plans.advanced;
                    break;
                case "pro_yr":
                    state.plan = yearly.plans.pro;
                    break;
                default:
                    state.plan = monthly.plans.arcade;
            }
        },
        addAddons(state, action) {
            state.addons[action.payload] = state.options.addons[action.payload]
        },
        deleteAddons(state, action) {
           delete state.addons[action.payload]
        },
        setAddons(state, action){
            if (action.payload === "yearly") {
                state.addons = {  
                    service: yearly.addons.service,
                    storage: yearly.addons.storage
                };
            } else {
                state.addons = {
                    service: monthly.addons.service,
                    storage: monthly.addons.storage
                }
            }
        }
    }
})

export const { setOption, setOptions, setPlan, addAddons, deleteAddons, setAddons } = planSlice.actions;
export const planSliceReducer = planSlice.reducer; 


