export interface SerieDetail {
    adult:                boolean;
    backdrop_path:        string;
    created_by:           any[];
    episode_run_time:     number[];
    first_air_date:       Date;
    genres:               Genre[];
    homepage:             string;
    id:                   number;
    in_production:        boolean;
    languages:            string[];
    last_air_date:        Date;
    last_episode_to_air:  TEpisodeToAir;
    name:                 string;
    next_episode_to_air:  TEpisodeToAir;
    networks:             Network[];
    number_of_episodes:   number;
    number_of_seasons:    number;
    origin_country:       OriginCountry[];
    original_language:    string;
    original_name:        string;
    overview:             string;
    popularity:           number;
    poster_path:          string;
    production_companies: Network[];
    production_countries: ProductionCountry[];
    seasons:              Season[];
    spoken_languages:     SpokenLanguage[];
    status:               string;
    tagline:              string;
    type:                 string;
    vote_average:         number;
    vote_count:           number;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface TEpisodeToAir {
    air_date:        Date;
    episode_number:  number;
    id:              number;
    name:            string;
    overview:        string;
    production_code: string;
    season_number:   number;
    still_path:      string;
    vote_average:    number;
    vote_count:      number;
}

export interface Network {
    name:           string;
    id:             number;
    logo_path:      null | string;
    origin_country: OriginCountry;
}

export enum OriginCountry {
    Jp = "JP",
}

export interface ProductionCountry {
    iso_3166_1: OriginCountry;
    name:       string;
}

export interface Season {
    air_date:      Date;
    episode_count: number;
    id:            number;
    name:          string;
    overview:      string;
    poster_path:   string;
    season_number: number;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}
