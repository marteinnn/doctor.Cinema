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
        // Define your cinemas actions here
    },
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialState.movies,
    reducers: {
        // Define your movies actions here
    },
});

const showingsSlice = createSlice({
    name: 'showings',
    initialState: initialState.showings,
    reducers: {
        // Define your showings actions here
    },
});

const userSlice = createSlice({
    name: 'user',
    initialState: initialState.user,
    reducers: {
        // Define your user actions here
    },
});

// Export the actions for each slice
export const { actions: cinemasActions } = cinemasSlice;
export const { actions: moviesActions } = moviesSlice;
export const { actions: showingsActions } = showingsSlice;
export const { actions: userActions } = userSlice;

// Configure the store
const store = configureStore({
    reducer: {
        cinemas: cinemasSlice.reducer,
        movies: moviesSlice.reducer,
        showings: showingsSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;