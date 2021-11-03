import { createAction, props } from '@ngrx/store';
import { Movie, TrimmedMovie } from '../models';

// Fetch Trimmed Movie List
export const fetchMovies = createAction(
  '[Movie] Fetch Movies'
);

export const fetchMoviesSuccess = createAction(
  '[Movie] Fetch Movies Success',
  props<{ data: TrimmedMovie[] }>()
);

export const fetchMoviesFailure = createAction(
  '[Movie] Fetch Movies Failure',
  props<{ error: any }>()
);

// Get Movie Detail
export const getMovie = createAction(
  '[Movie] Get Movie',
  props<{ id: string }>()
);

export const getMovieSuccess = createAction(
  '[Movie] Get Movie Success',
  props<Movie>()
);

export const getMovieFailure = createAction(
  '[Movie] Get Movie Failure',
  props<{ error: any }>()
);
