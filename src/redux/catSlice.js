import { createSlice } from '@reduxjs/toolkit';

const catSlice = createSlice({
  name: 'cats',
  initialState: {
    loading: false,
    data: [],
    error: null,
    page: 1,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setLoading, setData, setError, setPage } = catSlice.actions;
export default catSlice.reducer;
