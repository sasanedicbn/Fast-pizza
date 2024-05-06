import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";
import LoaderSlice from "./Global/GlobalLoaderSlice";


const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        loader: LoaderSlice,
    }
})

export default store;