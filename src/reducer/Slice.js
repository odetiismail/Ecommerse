import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

//Writing Async logic

const API = "https://api.pujakaitem.com/api/products";
export const fetchPosts = createAsyncThunk("Posts/FetchPosts", async () => {
  const response = await axios.get(API);

  return response.data;
});

const initialState = {
  products: [],
  featureProducts: [],
  filterProduct: [],
  status: "idle",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    SortingPro: (state, { payload }) => {
      // console.log(current(state.products))
      if (payload === "high") {
        const da = state.products.sort((a, b) => b.price - a.price);

        state.filterProduct = da;
      }
      if (payload === "low") {
        const da = state.products.sort((a, b) => a.price - b.price);

        state.filterProduct = da;
      }

      if (payload == "a-z") {
        const da = state.products.sort((a, b) => a.name.localeCompare(b.name));

        state.filterProduct = da;
      }

      if (payload == "z-a") {
        const da = state.products.sort((a, b) => b.name.localeCompare(a.name));
        state.filterProduct = da;
      }
    },
    filterSearch: (state, { payload }) => {
      const da = state.products.filter((a) => {
        return a.name.match(payload);
      });

      return {
        ...state,
        filterProduct: da,
      };
    },
    categoryFilter: (state, { payload }) => {
      const da = state.products.filter((a) => {
        return a.category.match(payload);
      });

      if (payload === "All") {
        return {
          ...state,
          filterProduct: state.products,
        };
      }
      state.filterProduct = da;
    },
    companyFil: (state,{payload}) => {
      const com=state.products.filter((a)=>{
        return a.company.match(payload)
      })
     if(payload==='All'){
      return {
        ...state,
        filterProduct:state.products
      }
     }
     state.filterProduct= com
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "Pending";
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.status = "Successful";

        const fep = payload.filter((curr) => curr.featured === true);
        state.products = payload;
        state.featureProducts = fep;
        state.filterProduct = payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "error";
        // state.error = action.error.message
      });
  },
});

export const { SortingPro, filterSearch, categoryFilter, companyFil } =
  counterSlice.actions;

export default counterSlice.reducer;

//export const selectAllPosts=(state)=>state.posts.posts
