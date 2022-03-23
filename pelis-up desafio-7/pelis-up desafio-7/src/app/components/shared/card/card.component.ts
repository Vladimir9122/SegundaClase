import { Component, Input, OnInit } from '@angular/core';
import { MoviesSeriesApi } from 'src/interfaces/MoviesSeriesApi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie_serie!: MoviesSeriesApi;

  url: string = "https://image.tmdb.org/t/p/w500";

  @Input() media_type: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getTitle() {
    if (this.movie_serie.title) {
      return this.movie_serie.title
    } else {
      return this.movie_serie.name
    }
  }

}
