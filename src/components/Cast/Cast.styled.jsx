import styled from 'styled-components';

export const CastWrapper = styled.div`
  padding-top: 30px; 
  padding-bottom: 30px; 
`;

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; 
`;

export const CastItem = styled.li`
  width: 220px; 
  overflow: hidden;

  p:not(:last-child) {
    margin-top: 15px; 
  }

  &:hover img {
    filter: brightness(0.8) sepia(1); 
    transition: 300ms ease-in-out;
  }
`;

export const ActorsImg = styled.img`
  height: 260px; 
  border: 5px solid #fffff; 
  border-radius: 50%; 
  filter: grayscale(1); 
`;

export const ActorName = styled.p`
  font-family: 'Arial', sans-serif; 
  font-size: 18px; 
  color: #333; 
`;

export const Button = styled.button`
  background-color: #ff5733; 
  color: white; 
  font-family: 'Arial', sans-serif; 
  font-size: 16px; 
  border: none;
  padding: 10px 20px; 
  border-radius: 5px; 
  cursor: pointer;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #ff8c66; 
  }
`;
