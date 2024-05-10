import { createSlice } from '@reduxjs/toolkit';


const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: [],
    reducers: {
    addPizza: (state, action) => {
        const pizza = action.payload
        const {id} = pizza
        const existingPizza = state.find(p => p.id === id)
        if(!existingPizza){
            state.push({...pizza, count: 1})
        } else {
            existingPizza.count++
        }
    },

      removePizza: (state, action) => {
        const {id} = action.payload
        const existingPizza = state.find(p => p.id === id)
        if(existingPizza && existingPizza.count > 0){
            existingPizza.count--;
        }
      },
    }
  });
  

export const {addPizza, removePizza} = pizzaSlice.actions;
export default pizzaSlice.reducer;
