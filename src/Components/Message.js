import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

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
