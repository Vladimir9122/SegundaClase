export interface MoviesSeriesApi {
    overview:          string;
    release_date:      Date;
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    vote_count:        number;
    original_language: string;
    id:                number;
    poster_path:       string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    original_title:    string;
    popularity:        number;
    original_name:     string;
    name:              string;
    media_type:        string;
}