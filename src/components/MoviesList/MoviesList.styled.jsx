import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-top: 20px;
  margin-left: 40px;
`;

export const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const MovieLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  color: #0077b6;
  transition: color 600ms linear;
`;
