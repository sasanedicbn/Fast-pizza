import { createSlice } from '@reduxjs/toolkit';


const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customerName: '',
    priority: false,
  },
  reducers: {
    getName: (state,action) => {
        state.customerName = action.payload
        console.log(action.payload)
    },
    togglePriority: (state, action) => {
      state.priority = action.payload
    }
  }
});

export const {getName,togglePriority} = customerSlice.actions;

export default customerSlice.reducer;
