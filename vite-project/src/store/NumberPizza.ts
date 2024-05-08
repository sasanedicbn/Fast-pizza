import { createSlice } from '@reduxjs/toolkit';


const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {},
    reducers: {
      addPizza: (state, action) => {
        const pizza = action.payload;
        const {id} = pizza
        console.log(pizza)
        if (!state[id]) {
          state[id] = {...pizza, count: 0}
        }
        state[id].count++;
          },

      removePizza: (state, action) => {
        const { id } = action.payload;
        if (state[id] && state[id].count > 0) {
          state[id].count--;
        }
      },
    }
  });
  

export const {addPizza, removePizza} = pizzaSlice.actions;
export default pizzaSlice.reducer;
