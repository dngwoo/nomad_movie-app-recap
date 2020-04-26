import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Image = styled.div`
height: 180px;
background-image: url(${({ bgUrl }) => bgUrl});
background-size: cover;
border-radius: 4px;
transition: opacity .1s linear;
}
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom:5px;
  &:hover {
    ${Image}{
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
`;
const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 0.6rem;
  opacity: 0.5;
`;

const Poster = ({ id, bgUrl, title, rating, year, isMovie }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            bgUrl
              ? `https://image.tmdb.org/t/p/w300${bgUrl}`
              : require('assets/noPosterSmall.png')
          }
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{' '}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length < 17 ? title : `${title.substring(0, 17)}...`}
      </Title>
      <Year>{year.substring(0, 4)}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};
export default Poster;

/* <a>
  <div>
    <div>
        <span></span>
    </div>
    <span></span>
    <span></span>
  </div>
</a>; */
