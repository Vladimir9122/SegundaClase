import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetail } from 'src/interfaces/MovieDetail';
import { MoviesSeriesApi } from 'src/interfaces/MoviesSeriesApi';
import { SerieDetail } from 'src/interfaces/SerieDetail';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private base_url: string = 'https://api.themoviedb.org/3';

  private api_key: string = 'a49dee80945e6c2f84d6b86e2b16a0bd';

  private lang: string = 'es';

  constructor(private _http: HttpClient) {


  }

  getTrending(): Observable<MoviesSeriesApi[]> {
    const params = { params: new HttpParams().set('api_key', this.api_key).set('language', this.lang) }
    let response = this._http.get<MoviesSeriesApi[]>(this.base_url + '/trending/all/week', params)

    return response;

  }

  getMovies(): Observable<MoviesSeriesApi[]> {
    const params = { params: new HttpParams().set('api_key', this.api_key).set('language', this.lang) }
    let response = this._http.get<MoviesSeriesApi[]>(this.base_url + '/movie/popular', params)

    return response;
  }

  getSeries(): Observable<MoviesSeriesApi[]> {
    const params = { params: new HttpParams().set('api_key', this.api_key).set('language', this.lang) }
    let response = this._http.get<MoviesSeriesApi[]>(this.base_url + '/tv/popular', params)

    return response;
  }

  getMovie(id: number): Observable<MovieDetail> {
    const params = { params: new HttpParams().set('api_key', this.api_key).set('language', this.lang) }
    let response = this._http.get<MovieDetail>(this.base_url + '/movie/' + id, params)

    return response;
  }

  getSerie(id: number): Observable<SerieDetail> {
    const params = { params: new HttpParams().set('api_key', this.api_key).set('language', this.lang) }
    let response = this._http.get<SerieDetail>(this.base_url + '/tv/' + id, params)

    return response;
  }
}
