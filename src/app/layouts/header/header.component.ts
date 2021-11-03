import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fetchMovies } from 'src/app/store/actions';
import { AppState, MovieState } from 'src/app/store/datatypes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  movieInfo$ = new BehaviorSubject<string>('');

  private destroy$ = new Subject();

  constructor(private readonly store: Store<AppState>, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    /**
     * Get movie state
     */
    this.store
    .select((state) => state.movie)
    .pipe(takeUntil(this.destroy$))
    .subscribe((movieState: MovieState) => {
    });
  }
  
}
