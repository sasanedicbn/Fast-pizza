import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


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
      clearCart: (state) => {
        state.splice(0, state.length)
      }
    }
  });
  
export const getTotalCartPizzas = (state:RootState) => {
    return state.pizza.reduce((total, pizza) => total + pizza.count, 0)
}
export const getTotalCartPrice = (state:RootState) => {
    return state.pizza.reduce((total,pizza) => total + (pizza.count * pizza.unitPrice), 0)
}
export const {addPizza, removePizza, clearCart} = pizzaSlice.actions;
export default pizzaSlice.reducer;
