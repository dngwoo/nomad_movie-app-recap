import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
  async componentDidMount() {}
  render() {
    console.log(this.props);
    return <DetailPresenter />;
  }
}
