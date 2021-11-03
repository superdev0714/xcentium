import { createReducer, on } from '@ngrx/store';
import * as MovieAction from '../actions';
import { MovieState } from '../datatypes';

export const initialState: MovieState = {
  inProgress: false,
  errorMessage: '',
  trimmedMovie: [],
  movies: []
};


export const reducer = createReducer(
  initialState,

  // Fetch Movies
  on(MovieAction.fetchMovies, (state) => ({
    ...state,
    inProgress: true,
    errorMessage: '',
    trimmedMovie: []
  })),

  // Fetch Movies Success
  on(MovieAction.fetchMoviesSuccess, (state, payload) => ({
    ...state,
    inProgress: false,
    errorMessage: '',
    trimmedMovie: payload.data
  })),

  // Fetch Movies Failure
  on(MovieAction.fetchMoviesFailure, state => ({
    ...state,
    inProgress: false,
    errorMessage: 'Failed to fetch Movies',
    trimmedMovie: []
  })),

  // Get Movie Detail
  on(MovieAction.getMovie, (state, payload) => {
    let { movies } = state;
    movies = movies.filter(m => m.imdbID !== payload.id);
    return {
      ...state,
      inProgress: true,
      errorMessage: '',
      movies
    }
  }),

  // Get Movie Detail Success
  on(MovieAction.getMovieSuccess, (state, payload) => ({
    ...state,
    inProgress: false,
    errorMessage: '',
    movies: [...state.movies, payload]
  })),

  // Get Movie Detail Failure
  on(MovieAction.getMovieFailure, state => ({
    ...state,
    inProgress: false,
    errorMessage: 'Failed to get Movie'
  }))
);
