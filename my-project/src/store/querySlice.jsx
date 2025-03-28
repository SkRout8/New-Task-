import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to handle query submission
export const submitQuery = createAsyncThunk("query/submitQuery", async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "A", value: Math.random() * 100 },
        { name: "B", value: Math.random() * 100 },
        { name: "C", value: Math.random() * 100 },
      ]);
    }, 2000);
  });
});

const querySlice = createSlice({
  name: "query",
  initialState: {
    history: [],
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    addQueryToHistory: (state, action) => {
      state.history.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitQuery.fulfilled, (state, action) => {
        state.results = action.payload;
        state.loading = false;
      })
      .addCase(submitQuery.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { addQueryToHistory } = querySlice.actions;
export default querySlice.reducer;
