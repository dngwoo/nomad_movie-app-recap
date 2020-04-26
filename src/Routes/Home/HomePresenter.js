import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? <Loader /> : null;

export default HomePresenter;
