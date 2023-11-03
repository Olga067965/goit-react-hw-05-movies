import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  padding: 35px 20px;
  background-color: #f9f9f9; 
`;

export const InfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px; 

  :nth-of-type(even) {
    background-color: #fffff; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
    padding: 20px; 
  }
`;

export const InfoBlock = styled.li`
  border-radius: 10px; 
  background-color: #fffff; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
  padding: 30px; 

  :not(:last-child) {
    margin-bottom: 20px; 
  }

  h3 {
    color: #0077b6; 
    font-size: 18px; 
  }

  p {
    text-align: justify;
    font-size: 12px; 
    line-height: 1.5; 
  }
`;
