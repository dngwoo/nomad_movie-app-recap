import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  position: fixed;
  background: #141414;
  opacity: 0.8;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;
`;

const Item = styled.li``;

const SLink = styled(Link)`
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid
    ${({ current }) => (current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    {/* {console.log(pathname)} */}
    <List>
      <Item>
        <SLink to='/' current={pathname === '/' ? 1 : 0}>
          Movies
        </SLink>
      </Item>
      <Item>
        <SLink to='/tv' current={pathname === '/tv' ? 1 : 0}>
          TV
        </SLink>
      </Item>
      <Item>
        <SLink to='/search' current={pathname === '/search' ? 1 : 0}>
          Search
        </SLink>
      </Item>
    </List>
  </Header>
));

// 기본형태
/*
  <div>
    <ul>
      <li>
        <a herf="/">Movies</a> <-Link로 바뀜
      </li>
      <li>
        <a herf="/tv">TV</a> <-Link로 바뀜
      </li>
      <li>
        <a herf="/search">Search</a> <-Link로 바뀜
      </li>
    </ul>
  </div>
*/
/*
오류해결 : 
Received `true` for a non-boolean attribute "current" < - current={pathname === '/' ? 1 : 0} 로 해결
니꼬는 current를 Item으로 주었고 오류가 뜨지 않음. 하지만 난 Link에 주었는데 오류가 뜸. 이해가 가지 않는다.
*/
