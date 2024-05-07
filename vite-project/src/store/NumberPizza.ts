import { createSlice } from '@reduxjs/toolkit';


const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizza: 1,
  },
  reducers: {
    addPizza: (state) => {
        state.pizza++
    },
    removePiza(state){
        state.pizza++
    }
  }
});

export const {addPizza, removePiza} = pizzaSlice.actions;

export default pizzaSlice.reducer;
