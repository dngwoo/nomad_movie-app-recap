import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${(props) => (props.current ? 'red' : 'transparent')};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1rem;
`;

export default withRouter((props) => (
  <List>
    {console.log(props)}
    <Item current={props.location.pathname === '/'}>
      <SLink to="/">Home</SLink>
    </Item>
    <Item current={props.location.pathname === '/tv'}>
      <SLink to="/tv">TV</SLink>
    </Item>
    <Item current={props.location.pathname === '/search'}>
      <SLink to="/search">Search</SLink>
    </Item>
  </List>
));
