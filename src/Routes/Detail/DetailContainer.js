import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
  render() {
    console.log(this.props);
    return <DetailPresenter />;
  }
}
