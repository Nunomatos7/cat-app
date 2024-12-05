import { configureStore } from '@reduxjs/toolkit';
import { catApi } from '../redux/rtkApiSLice';
import catReducer from './catSlice';

const store = configureStore({
  reducer: {
    cats: catReducer,
    [catApi.reducerPath]: catApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});

export default store;
