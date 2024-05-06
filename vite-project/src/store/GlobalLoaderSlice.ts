import { createSlice } from '@reduxjs/toolkit';


const GlobalLoaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loader: false,
  },
  reducers: {
    getLoader: (state) => {
        state.loader = true
    }
  }
});

export const {getLoader} = GlobalLoaderSlice.actions;

export default GlobalLoaderSlice.reducer;
