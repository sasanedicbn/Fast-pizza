import { createSlice } from '@reduxjs/toolkit';


const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    button: false,
    customerName: '',
  },
  reducers: {
    showButton: state => {
        state.button = true;
    },
    getName: (state,action) => {
        state.customerName = action.payload
    }
  }
});

export const {showButton,getName} = customerSlice.actions;

export default customerSlice.reducer;
