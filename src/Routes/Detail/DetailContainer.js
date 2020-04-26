import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = this.props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const {
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push('/');
    }
    const { isMovie } = this.state;
    let result = null;
    try {
      if (isMovie) {
        // console.log(await moviesApi.movieDetail(parsedId));
        // adult, genres.name, original_title, overview,
        // backdrop_path, release_date, tagline, vote_average,
        // https://www.youtube.com/watch?v=${}, videos.results[i].key (map으로 돌리자)
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
        console.log(result);
      }
    } catch {
      this.setState({
        error: '영화 세부 내용을 알 수 없습니다.',
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} erro={error} loading={loading} />;
  }
}
