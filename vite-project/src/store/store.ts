import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";
import LoaderSlice from "./Global/GlobalLoaderSlice";
import NumberPizza from "./NumberPizza";


const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        loader: LoaderSlice,
        pizza: NumberPizza,
    }
})


export default store;