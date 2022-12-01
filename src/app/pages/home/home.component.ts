import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.moviesService.getMovies('popular', 12).subscribe((movies) => {
            this.popularMovies = movies;
            console.log(this.popularMovies);
        });
        this.moviesService.getMovies('upcoming', 8).subscribe((movies) => {
            this.upcomingMovies = movies;
            console.log(this.upcomingMovies);
        });
        this.moviesService.getMovies('top_rated', 6).subscribe((movies) => {
            this.topRatedMovies = movies;
            console.log(this.popularMovies);
        });
    }
}
