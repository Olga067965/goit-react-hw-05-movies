import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  position: relative;
`;

export const SearchFormInput = styled.input`
  margin: 20px 0;
  padding: 10px; 
  border-radius: 8px; 
  border: 1px solid #0077b6; 
  background-color: transparent;
  outline: none;
  color: #333; 
  width: 100%;
  max-width: 450px;
  height: 35px;
  font-size: 16px;
  transition: box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0 0 10px 1px #0077b6; 
  }
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: -40px;
  background-color: transparent;
  border-radius: 8px; 
  border: 1px solid #0077b6; 
  height: 35px;
  width: 40px;
  transition: box-shadow 300ms linear;

  &:hover {
    box-shadow: inset 0 0 10px 3px #0077b6;
  }
`;

export const IconSearch = styled(ImSearch)`
  color: #0077b6; 
  width: 30px;
  height: 30px;
`;
