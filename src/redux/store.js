import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './global/globalSlice';

const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});

export default store;
