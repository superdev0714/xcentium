import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Movie, TrimmedMovie } from '../models';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  fetchMovies() {
    return new BehaviorSubject<TrimmedMovie[]>([
      {
        imdbID: 'tt0268978',
        Title: 'A Beautiful Mind',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      },
      {
        imdbID: 'tt4679438',
        Title: 'B',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZDhlZmRlNmMtYmMyYy00Zjg0LWI0ZmQtYzNiNWM5YTU4YTI3XkEyXkFqcGdeQXVyNjQ0NjY3MDY@._V1_SX300.jpg'
      },
      {
        imdbID: 'tt1893520',
        Title: 'C',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOTM5Njc5ZTYtYzk1OS00ZmIxLTlkOTAtZmE3MjBiNjQ4MWQyXkEyXkFqcGdeQXVyNjIyNDgwMzM@._V1_SX300.jpg'
      },
      {
        imdbID: 'tt0365830',
        Title: 'Tenacious D in The Pick of Destiny',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTUyMDA3OTc4MV5BMl5BanBnXkFtZTcwNzE5NjkzMQ@@._V1_SX300.jpg'
      },
      {
        imdbID: 'tt0910970',
        Title: 'WALL·E',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg'
      }
    ]);
  }

  getMovieDetail(id: string) {
    return this.http.get<Movie>(`${environment.baseUrl}?apikey=${environment.token}&i=${id}`, httpOptions);
  }
  
}
