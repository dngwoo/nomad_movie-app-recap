import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title='현재 상영작'>
          {nowPlaying.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title='개봉 예정작'>
          {upcoming.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='인기 영화'>
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {error && <Message color='e74c3c' text={error} />}
    </Container>
  );

export default HomePresenter;
