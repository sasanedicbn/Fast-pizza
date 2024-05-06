import { createSlice } from '@reduxjs/toolkit';


const GlobalLoaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loader: false,
  },
  reducers: {
    getLoader: (state,action) => {
        state.loader = action.payload
    }
  }
});

export const {getLoader} = GlobalLoaderSlice.actions;

export default GlobalLoaderSlice.reducer;
