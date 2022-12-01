import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = 'api_key=b6173b294a7ff9f5e53d7acd70d287ba';
    constructor(private http: HttpClient) {}

    getMovies(type: string = 'upcoming', count: number) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }
    searchMovies(page: number) {
        return this.http
            .get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&${this.apiKey}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }
    getTvs(type: string = 'latest', count: number) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }
}
