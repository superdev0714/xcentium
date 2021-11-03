import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, MovieState } from '../datatypes';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';

export const selectRouter = createFeatureSelector<RouterReducerState>('router');

const { selectRouteParams } = getSelectors(selectRouter);

const selectMovieState = (state: AppState) => state.movie;

export const selectMovie = createSelector(
    selectMovieState,
    selectRouteParams,
    (movie: MovieState, { id }) => ({ movieState: movie, id })
);
