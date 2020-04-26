import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // console.log(props);
  }
  render() {
    return <DetailPresenter />;
  }
}
