import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    cart: [],
    order:{}
  },
  reducers: {
    addPizza: (state, action) => {
      const pizza = action.payload;
      const { id } = pizza;
      const existingPizza = state.cart.find(p => p.id === id);
      if (!existingPizza) {
        state.cart.push({ ...pizza, count: 1 });
      } else {
        existingPizza.count++;
      }
    },
    removePizza: (state, action) => {
      const { id } = action.payload;
      const existingPizza = state.cart.find(p => p.id === id);
      if (existingPizza && existingPizza.count > 0) {
        existingPizza.count--;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    orderSuccess: (state, action) => {
      state.cart.push(action.payload);
    }
  }
});

export const getTotalCartPizzas = (state: RootState) => {
  return state.pizza.cart.reduce((total, pizza) => total + pizza.count, 0);
};

export const getTotalCartPrice = (state: RootState) => {
  return state.pizza.cart.reduce((total, pizza) => total + (pizza.count * pizza.unitPrice), 0);
};

export const { addPizza, removePizza, clearCart, orderSuccess } = pizzaSlice.actions;
export default pizzaSlice.reducer;
