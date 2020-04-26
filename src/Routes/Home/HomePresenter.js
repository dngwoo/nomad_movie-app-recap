import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? '⏰' : null;

export default HomePresenter;
