import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getMovie } from 'src/app/store/actions';
import { AppState } from 'src/app/store/datatypes';
import { OptionalMovie } from 'src/app/store/models';
import { selectMovie } from 'src/app/store/selectors/movie.selectors';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  selectedMovie$: BehaviorSubject<OptionalMovie> = new BehaviorSubject<OptionalMovie>({})

  movie$ = this.store.pipe(select(selectMovie));

  inProgress = false;

  errorMessage = '';

  private destroy$ = new Subject();

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.movie$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        const { movieState, id } = data;
        if (id) {
          const selectedMovie = movieState.movies.find(m => m?.imdbID === id);
          this.inProgress = movieState.inProgress;
          this.errorMessage = movieState.errorMessage;
          if (selectedMovie) {
            this.selectedMovie$.next(selectedMovie);
          } else {
            this.fetchMovieDetail(id);
          }
        }
      });
  }

  private fetchMovieDetail(id: string) {
    if (!this.inProgress && !this.errorMessage) {
      this.store.dispatch(getMovie({ id }));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
