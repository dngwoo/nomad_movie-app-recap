// HomeContainer는 데이터만 정의하는 곳이다.
import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from 'api';

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      throw Error;
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: '영화 정보를 찾을 수 없습니다.',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    // moviesApi.nowPlaying().then((res) => console.log(res));
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
