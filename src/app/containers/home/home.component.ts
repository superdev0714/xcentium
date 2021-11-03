import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fetchMovies } from 'src/app/store/actions';
import { AppState, MovieState } from 'src/app/store/datatypes';
import { Movie, TrimmedMovie } from 'src/app/store/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  movieList$: BehaviorSubject<TrimmedMovie[]> = new BehaviorSubject<TrimmedMovie[]>([]);

  private destroy$ = new Subject();

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    /**
     * Get movie state
     */
    this.store
    .select((state) => state.movie)
    .pipe(takeUntil(this.destroy$))
    .subscribe((movieState: MovieState) => {
      this.movieList$.next(movieState.trimmedMovie);
    });
    
    this.fetchMovies();
  }

  private fetchMovies() {
    // Distpach Action for Top Stories within science category
    this.store.dispatch(fetchMovies());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
