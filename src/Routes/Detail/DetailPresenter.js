import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
  height: calc(100vh - 50px);
  padding: 50px;
  position: relative;
  display: flex;
  justify-content: center;
`;
// 50px을 빼주는 이유는 body가 padding-top:50px이 되어 있으므로
// 스크롤이 생겨버린다. 그래서 50px을 빼준다.
const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;
const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  height: 100%;
`;
const Cover = styled.div`
  width: 50%;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;
const Data = styled.div`
  width: 50%;
  margin-left: 10px;
`;
const Title = styled.span`
  font-size: 2rem;
`;
const ItemContainer = styled.div`
  margin: 20px 0;
`;
const Item = styled.span``;
const Divder = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : error === null ? (
    <Container>
      <Backdrop
        bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../assets/noPosterSmall.png')
          }
        />
        <Data>
          <Title>
            {/* movie일때, tv일때 다르기 때문에 삼항연산자 사용*/}
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divder>•</Divder>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  ) : (
    <Message color="#e74c3c" text={error} />
  );

/* 

<div> <- Container
  <div></div> <- Backdrop
  <div> <- Content
        <div></div> <- Cover
        <div> <- Data
            <h3></h3> <- Title
            <div> <- ItemContainer
                <span></span> <- Item
                <span></span> <- Divder
            </div>
            <p></p> <- Overview
        </div>
   </div>
</div>; 
*/

DetailPresenter.propTypes = {
  result: PropTypes.object,
  erro: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
