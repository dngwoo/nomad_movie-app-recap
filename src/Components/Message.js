import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 150px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
// 밑에서부터 자른다. height: calc(100vh - 150px); 중앙에 맞춰주기 위해 사용
const Text = styled.span`
  color: ${({ color }) => color};
`;

const Message = ({ color, text }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  test: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
