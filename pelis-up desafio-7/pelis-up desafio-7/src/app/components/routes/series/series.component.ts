import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesSeriesApi } from 'src/interfaces/MoviesSeriesApi';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: MoviesSeriesApi[] = [];
  series_show: MoviesSeriesApi[] = [];
  series_search: MoviesSeriesApi[] = [];

  toSearch: string = '';

  constructor(private _moviesService: MoviesService) {
 }

  ngOnInit(): void {
    this.getSeries()
  }

  getSeries(){
    this._moviesService.getSeries().subscribe({
      next: (data: any) => {
        this.series = data.results;
        this.series_show = data.results;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  searchSerie(e: string) {

    this.series_search = [];
    this.toSearch = e.toUpperCase();

    this.series_search = this.series.filter(serie => (serie.title + "").concat(serie.name + "").toUpperCase().includes(this.toSearch))

    if (e !== '') {
      this.series_show = this.series_search
    } else {
      this.series_show = this.series;
    }
  }


  public count() {
    return this.series_show.length;
  }

}
