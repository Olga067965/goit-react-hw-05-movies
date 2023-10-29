import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const Header = styled.header`
  padding: 10px 0 12px 20px;
  margin-bottom: 20px; 

  display: flex;
  gap: 48px; 
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #0077b6; 
  box-shadow: 0 0 13px 3px #0077b6; 
`;

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 48px; 
`;

export const StyledLink = styled(NavLink)`
  max-width: 60px;
  font-weight: 600;
  color: #0077b6; 
  padding: 8px 16px;
  border-radius: 8px; 
  transition: color 300ms linear, background 350ms linear;

  &:hover {
    color: #0000FF; 
  }

  &.active {
    font-weight: 900;
    color: #FFFFFF; 
    background-color: #0077b6; 
  }
`;
