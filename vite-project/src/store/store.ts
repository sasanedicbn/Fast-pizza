import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";
import LoaderSlice from "./Global/GlobalLoaderSlice";
import NumberPizza from "./PizzaSlice";


const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        loader: LoaderSlice,
        pizza: NumberPizza,
    }
})
export type RootState = ReturnType<typeof store.getState>;

export default store;