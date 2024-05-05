import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";


const store = configureStore({
    reducer: {
        customer: CustomerSlice,
    }
})

export default store;