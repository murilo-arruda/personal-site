import styled from 'styled-components';
import media from 'styled-media-query';
import * as V from 'styles/variables';

export const StyledCard = styled.div`
  color: white;
  width: 300px;
  margin-bottom: 15px;
  background-color: #040505;
  border: 3px solid ${V.Color.pinkRedNeon};
  padding-bottom: 5px;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
  ${media.lessThan('614px')`
    border: 2px solid ${V.Color.pinkRedNeon};
   
  `}
  ${media.greaterThan('615px')`
    &:hover {
      transform: scale(1.3);
    }
  `}
`;

export const Thumb = styled.img`
  margin-bottom: 0;
`;

export const Title = styled.h1`
  color: #db005e;
  margin-top: 0;
  text-align: center;
  font-weight: 600;
  margin-bottom: 0.3em;
`;

export const Info = styled.p`
  margin-bottom: 0.3em;
  font-size: 1em;
  text-align: center;
`;
