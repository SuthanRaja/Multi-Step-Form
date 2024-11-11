import { configureStore }  from "@reduxjs/toolkit";
import toggleReducer from '../Slices/toggleSlice'

const store = configureStore({
    reducer:{
        togglePlan : toggleReducer,
    },

});
export default store;