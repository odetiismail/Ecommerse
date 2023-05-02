import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

//Writing Async logic

const API = "https://api.pujakaitem.com/api/products";
export const fetchPosts = createAsyncThunk("Posts/FetchPosts", async () => {
  const response = await axios.get(API);

  return response.data;
});
// const initialState = {
//   value: [],
// };

const initialState = {
  products: [],
  featureProducts: [],
  status: "idle",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "Pending";
      })
      .addCase(fetchPosts.fulfilled, (state, {payload}) => {
        state.status = "Successful";

        const fep=payload.filter((curr)=>curr.featured===true)
          state.products=payload
          state.featureProducts=fep
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "error";
        // state.error = action.error.message
      });
  },
});

export const { fetPro } = counterSlice.actions;

export default counterSlice.reducer;

//export const selectAllPosts=(state)=>state.posts.posts
