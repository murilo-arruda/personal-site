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
  position: relative;
  left: 0px;
  top: 0px;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
  ${media.lessThan('614px')`
    border: 2px solid ${V.Color.pinkRedNeon};
   
  `}
  ${media.lessThan('1000px')`
    border: 2px solid ${V.Color.pinkRedNeon};
    &:hover {
      transform: scale(1.1);
    }
  `}
  ${media.greaterThan('1000px')`
    &:hover {
      transform: scale(1.2);
    }
  `}
`;

export const Thumb = styled.img`
  margin-bottom: 0;
`;

export const Info = styled.p`
  padding-top: 10px;
  margin-bottom: 0.3em;
  font-size: 1em;
  text-align: center;
`;
