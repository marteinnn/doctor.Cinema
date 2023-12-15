import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define the initial state for each reducer
const initialState = {
    cinemas: [],
    movies: [],
    showings: [],
    user: null,
};

// Create slices for each reducer
const cinemasSlice = createSlice({
    name: 'cinemas',
    initialState: initialState.cinemas,
    reducers: {
    },
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialState.movies,
    reducers: {
    },
});

const showingsSlice = createSlice({
    name: 'showings',
    initialState: initialState.showings,
    reducers: {
    },
});

const userSlice = createSlice({
    name: 'user',
    initialState: initialState.user,
    reducers: {
    },
});

export const { actions: cinemasActions } = cinemasSlice;
export const { actions: moviesActions } = moviesSlice;
export const { actions: showingsActions } = showingsSlice;
export const { actions: userActions } = userSlice;


const store = configureStore({
    reducer: {
        cinemas: cinemasSlice.reducer,
        movies: moviesSlice.reducer,
        showings: showingsSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;