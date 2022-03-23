import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesSeriesApi } from 'src/interfaces/MoviesSeriesApi';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  movies: MoviesSeriesApi[] = [];
  movies_show: MoviesSeriesApi[] = [];
  movies_search: MoviesSeriesApi[] = [];

  toSearch: string = '';

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this._moviesService.getMovies().subscribe({
      next: (data: any) => {
        this.movies = data.results;
        this.movies_show = data.results;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  searchMovie(e: string) {

    this.movies_search = [];
    this.toSearch = e.toUpperCase();

    this.movies_search = this.movies.filter(movie => (movie.title + "").concat(movie.name + "").toUpperCase().includes(this.toSearch))

    if (e !== '') {
      this.movies_show = this.movies_search
    } else {
      this.movies_show = this.movies;
    }
  }


  public count() {
    return this.movies_show.length;
  }

}
