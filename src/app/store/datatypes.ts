import { RouterState } from "@ngrx/router-store";
import { Movie, TrimmedMovie } from "./models";

export interface BaseState {
    inProgress: boolean;
    errorMessage: string;
}

export interface MovieState extends BaseState {
    movies: Movie[];
    trimmedMovie: TrimmedMovie[];
}

export interface AppState {
    movie: MovieState;
    router: RouterState;
}
