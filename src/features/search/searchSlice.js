import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  results: null,
  searchText: "", 
  error: '',
};

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async (searchText) => {
      let URL = ""
      const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
      if(searchText !== "") {
          URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${searchText}`
      } else {
          URL = `https://api.unsplash.com/photos/random/`
      }
      const response = await fetch(URL)
      const json = await response.json()
      return json
  }
);

export const searchSlice = createSlice({
  
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
      })  
       .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.results = []
        state.error = action.error.message
      })
  },
});


export default searchSlice.reducer;
