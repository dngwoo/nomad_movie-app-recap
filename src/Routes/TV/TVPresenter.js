import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Poster from 'Components/Poster';
import Message from 'Components/Message';

const Container = styled.div`
  padding: 20px;
`;

export default ({
  topRated,
  popular,
  airingToday,
  onTheAir,
  error,
  loading,
}) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Section title='상위 프로그램'>
        {topRated &&
          topRated.length > 0 &&
          topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              bgUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              year={show.first_air_date}
              isMovie={false}></Poster>
          ))}
      </Section>
      <Section title='인기 프로그램'>
        {popular &&
          popular.length > 0 &&
          popular.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              bgUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              year={show.first_air_date}
              isMovie={false}></Poster>
          ))}
      </Section>
      <Section title='금일 프로그램'>
        {airingToday &&
          airingToday.length > 0 &&
          airingToday.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              bgUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              year={show.first_air_date}
              isMovie={false}></Poster>
          ))}
      </Section>
      <Section title='생방송'>
        {onTheAir &&
          onTheAir.length > 0 &&
          onTheAir.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              bgUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              year={show.first_air_date}
              isMovie={false}></Poster>
          ))}
      </Section>
      {error && <Message text={error} color='#e74c3c' />}
    </Container>
  );
};
