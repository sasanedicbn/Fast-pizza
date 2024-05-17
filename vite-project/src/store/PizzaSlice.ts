import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type Pizza = {
  id: string;
  name: string;
  unitPrice: number;
  count: number;
};

type Order = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: Pizza[];
  orderPrice: number;
};

type PizzaState = {
  cart: Pizza[];
  order: Order | null;
};

const initialState: PizzaState = {
  cart: [],
  order: null,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<Pizza>) => {
      const pizza = action.payload;
      const existingPizza = state.cart.find(p => p.id === pizza.id);
      if (!existingPizza) {
        state.cart.push({ ...pizza, count: 1 });
      } else {
        existingPizza.count++;
      }
    },
    removePizza: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const existingPizza = state.cart.find(p => p.id === id);
      if (existingPizza && existingPizza.count > 0) {
        existingPizza.count--;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    orderSuccess: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
    setOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
  },
});

export const getTotalCartPizzas = (state: RootState): number => {
  return state.pizza.cart.reduce((total, pizza) => total + pizza.count, 0);
};

export const getTotalCartPrice = (state: RootState): number => {
  return state.pizza.cart.reduce((total, pizza) => total + (pizza.count * pizza.unitPrice), 0);
};

export const { addPizza, removePizza, clearCart, orderSuccess, setOrder } = pizzaSlice.actions;
export default pizzaSlice.reducer;
