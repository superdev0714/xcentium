import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as movieAction from '../actions/movie.actions';
import { MovieService } from '../services/movie.service';

@Injectable()
export class MovieEffects {

  fetchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(movieAction.fetchMovies),
      mergeMap(() => {
        return this.movieService.fetchMovies().pipe(
          map(response => movieAction.fetchMoviesSuccess({ data: response })),
          catchError(error => of(movieAction.fetchMoviesFailure(error.error))),
        )
      })
    )
  );

  getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(movieAction.getMovie),
      mergeMap((actionPayload) => {
        return this.movieService.getMovieDetail(actionPayload.id).pipe(
          map(response => movieAction.getMovieSuccess(response)),
          catchError(error => of(movieAction.getMovieFailure(error.error))),
        )
      })
    )
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}

}
