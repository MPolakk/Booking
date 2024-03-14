import { createSlice } from '@reduxjs/toolkit';

export const modeType = {
  light: 'light',
  dark: 'dark',
};

const initialState = {
  mode: modeType.light,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode(state, action) {
      Object.entries(modeType).forEach(type => {
        if (type[1] === action.payload) {
          state.mode = action.payload;
          localStorage.setItem('mode', action.payload);
        }
      });
      localStorage.setItem('mode', state.mode);
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
