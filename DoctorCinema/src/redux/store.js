import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        cinemas: cinemasReducer,
        movies: moviesReducer,
        showings: showingsReducer,
        user: userReducer,
    },
});
