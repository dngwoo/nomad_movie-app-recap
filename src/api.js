import axios from 'axios';

// axios instance 생성
const api = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3/',
  // params: {
  //   api_key: '10923b261ba94d897ac6b81148314a3f',
  //   language: 'en-US',
  // },
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = '10923b261ba94d897ac6b81148314a3f';
  config.params['language'] = 'en-US';
  return config;
});

// movieApi 객체 생성
export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
        include_adult: true,
      },
    }),
};

// tvApi 객체 생성
export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  onTheAir: () => api.get('/tv/on_the_air'),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
        include_adult: true,
      },
    }),
};

// movieDetail
// https://api.themoviedb.org/3/movie/72432? <- 주소
// api_key=553c1b1a2eafa95108cbaa0d955efd30 <- parameter
// &language=en-US <- parameter
// &append_to_response=videos <- parameter

// search
// https://api.themoviedb.org/3/search/company?
// api_key=553c1b1a2eafa95108cbaa0d955efd30
// &query=code
// &page=1

// search 부가설명
// Pass a text query to search. This value should be URI encoded.
// query문에 들어가는 text는 URI encoded가 필요하다고 나와 있음.
