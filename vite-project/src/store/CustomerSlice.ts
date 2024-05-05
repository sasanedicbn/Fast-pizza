import { createSlice } from '@reduxjs/toolkit';


const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customerName: '',
  },
  reducers: {
    getName: (state,action) => {
        state.customerName = action.payload
        console.log('state', state , 'action', action)
    }
  }
});

export const {getName} = customerSlice.actions;

export default customerSlice.reducer;
