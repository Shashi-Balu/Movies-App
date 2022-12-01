import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=b6173b294a7ff9f5e53d7acd70d287ba'
        );
    }
}
