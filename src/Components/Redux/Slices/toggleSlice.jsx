import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "togglePlan",
    initialState: {
        isYearly: false,             
        selectedPlan: null,          
        personalInfo: {},            
        selectedAddons: []           
    },
    reducers: {
        setIsYearly(state) {
            state.isYearly = !state.isYearly; 
            state.selectedPlan = state.isYearly ? "yearly" : "monthly"; 
        },
        selectPlan(state, action) {
            state.selectedPlan = action.payload;  
        },
        setPersonalInfo(state, action) {
            state.personalInfo = action.payload;
        },
        toggleAddon(state, action) {
            const addon = action.payload;
            if (state.selectedAddons.includes(addon)) {
                state.selectedAddons = state.selectedAddons.filter(event => event !== addon);
            } else {
                state.selectedAddons.push(addon);
            }
        }
    }
})

export const { setIsYearly, selectPlan, setPersonalInfo, toggleAddon } = toggleSlice.actions;
export default toggleSlice.reducer;
