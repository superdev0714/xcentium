import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppState } from '../datatypes';
import * as movie from './movie.reducer';

export const reducers: ActionReducerMap<AppState> = {
  movie: movie.reducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
