import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = `https://api.themoviedb.org/3/movie`;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ type, page }) => {
  const response = await axios.get(`${BASE_URL}/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
  return response.data.results;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    page: 1,
    status: 'idle',
    error: null,
  },
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page = Math.max(state.page - 1, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { nextPage, prevPage } = moviesSlice.actions;

export default moviesSlice.reducer;
