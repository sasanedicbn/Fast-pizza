import { createSlice } from '@reduxjs/toolkit';


const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customerName: false,
  },
  reducers: {
    showCustomerName: state => {
        state.customerName = true,
    }
  }
});

export const showCustomerName = customerSlice.actions;

export default customerSlice.reducer;
