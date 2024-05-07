import { createSlice } from '@reduxjs/toolkit';


const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizza: 1,
  },
  reducers: {
    getPizza: (state,action) => {
        state.pizza = action.payload
        console.log(action.payload)
    }
  }
});

export const {getPizza} = pizzaSlice.actions;

export default pizzaSlice.reducer;
