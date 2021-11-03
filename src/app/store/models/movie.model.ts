import { MovieDetailsComponent } from "src/app/containers/movie-details/movie-details.component";

export interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings : Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export type OptionalMovie = Partial<Movie>;

export interface Rating {
    Source: string;
    Value: string;
}

// Interface for displaying on movie list page
export interface TrimmedMovie {
    imdbID: string;
    Title: string;
    Poster: string;
}
