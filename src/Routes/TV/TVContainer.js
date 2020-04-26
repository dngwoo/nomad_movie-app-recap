// HomeContainer는 데이터만 정의하는 곳이다.
import React from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from 'api';

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    onTheAir: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: onTheAir },
      } = await tvApi.onTheAir();
      this.setState({
        topRated,
        popular,
        airingToday,
        onTheAir,
      });
    } catch {
      this.setState({
        error: 'TV 정보를 찾을 수 없습니다.',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    // moviesApi.nowPlaying().then((res) => console.log(res));
    const {
      topRated,
      popular,
      airingToday,
      onTheAir,
      error,
      loading,
    } = this.state;
    console.log(topRated, popular, airingToday, onTheAir, error, loading);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        onTheAir={onTheAir}
        error={error}
        loading={loading}
      />
    );
  }
}
