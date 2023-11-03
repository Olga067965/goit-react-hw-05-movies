import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const PageWrapper = styled.section`
  padding: 20px;
`;

export const ReturnBtn = styled(NavLink)`
  padding: 7px 10px;
  margin-left: 14px;
  margin-bottom: 4px};

  display: inline-flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: #0077b6;
  border: transparent;
  border-radius: 4px;
  font-weight: 600;
  box-shadow: 0 0 13px 3px #0077b6;
  transition: color 300ms linear, box-shadow 300ms linear;

  &:hover,
  &:focus {
    color: #0077b6;
    box-shadow: 0 0 13px 7px #0077b6;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 20px;
`;

export const Thumb = styled.div`
  width: 570px;
  overflow: hidden;

  img {
    border: 1px solid #0077b6;
    border-radius: 16px;
    transition: 1s;
    transform: scale(1);
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Info = styled.div`
  width: 500px;
  text-align: justify;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  // font-family: 'Bad Script';
  font-size: 28px;--interval: 5000ms;
  color: #0077b6;
  display: block;
    }
  }
`;

export const InfoList = styled.ul`
  h3 {
    margin-bottom: 16px;
    // font-family: 'Bad Script';
    font-size: 22px;
    color: #0077b6;
    display: block;
  }
`;

export const Item = styled.li`
  p span {
    padding-left: 6px;
    padding-right: 8px;
    margin-left: 8px;

    font-weight: 900;
    vertical-align: middle;
    color: #000000;
    width: 50px;
    height: 20px;
    border-radius: 16px;
    box-shadow: 0 0 20px 2px #0077b6;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SubInfoWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SubInfoTitle = styled.h3`
  margin-bottom: 20px;
`;

export const SubInfoList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const SubInfoLink = styled(Link)`
  padding: 8px 5px;
  font-weight: 600;
  text-align: center;
  border: solid 1px #0077b6;
  border-radius: 16px;
  width: 125px;
  display: block;
  transition: color 300ms linear, box-shadow 300ms linear;

  &:hover {
    color: #0000FF;
    box-shadow: 0 0 13px 3px #0077b6;
  }
`;
export const Hr = styled.div`
  border-top: 1px solid #0077b6;
  box-shadow: 0 0 13px 3px #0077b6;
`;
