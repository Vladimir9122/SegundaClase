import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesSeries } from 'src/interfaces/MoviesSeries';
import { MoviesSeriesApi } from 'src/interfaces/MoviesSeriesApi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {

  item: string = "Todo";
  toSearch: string = "";
  media_type: string = ""

  movies_series: MoviesSeriesApi[] = [];
  movies_series_show: MoviesSeriesApi[] = [];

  movies_series_search: MoviesSeriesApi[] = [];


  constructor(private _moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.getTrending()
  }

  getTrending() {
    this.item='Todo';
    
    this._moviesService.getTrending().subscribe({
      next: (data: any) => {
        this.setLists(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getMovies() {
    this.item='Películas';
    this.media_type = 'movie'

    this._moviesService.getMovies().subscribe({
      next: (data: any) => {
        this.setLists(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getSeries() {
    this.item='Series';
    this.media_type = 'tv'

    this._moviesService.getSeries().subscribe({
      next: (data: any) => {
        this.setLists(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setLists(data: any) {
    this.movies_series = data.results;
    this.movies_series_show = data.results;
  }

  searchMovieOrSerie(e: string) {

    this.movies_series_search = [];
    this.toSearch = e.toUpperCase();

    this.movies_series_search = this.movies_series.filter(movie_serie => (movie_serie.title + "").concat(movie_serie.name + "").toUpperCase().includes(this.toSearch))

    if (e !== '') {
      this.movies_series_show = this.movies_series_search
    } else {
      this.movies_series_show = this.movies_series;
    }
  }


  public count() {
    return this.movies_series_show.length;
  }

}
