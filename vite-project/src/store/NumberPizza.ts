import { createSlice } from '@reduxjs/toolkit';


const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {},
    reducers: {
      addPizza: (state, action) => {
        const { id } = action.payload;
        console.log(id)
        if (!state[id]) {
          state[id] = 0;
        }
        state[id]++;
          },

      removePizza: (state, action) => {
        const { id } = action.payload;
        if (state[id] && state[id] > 0) {
          state[id]--;
        }
      },
    }
  });
  

export const {addPizza, removePizza} = pizzaSlice.actions;
export default pizzaSlice.reducer;
