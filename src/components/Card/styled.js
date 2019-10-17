import styled from 'styled-components';
import media from 'styled-media-query';
import * as V from 'styles/variables';

export const ButtonStack = styled.div`
  text-align: center;
`;

export const StyledCard = styled.div`
  width: 300px;
  margin-bottom: 15px;
  background-color: #040505;
  border: 4px solid ${V.Color.pinkRedNeon};
  padding-bottom: 5px;
  box-shadow: 0 0 8px 2px ${V.Color.pinkRedNeon};
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 0 1px -2px ${V.Color.pinkRedNeon};
  }
  ${media.lessThan('small')`
    border: 2px solid ${V.Color.pinkRedNeon};
    box-shadow: 0 0 6px 2px ${V.Color.pinkRedNeon};
  `}
`;

export const Thumb = styled.img`
  margin-bottom: 0;
`;

export const Title = styled.h1`
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

export const Button = styled.button`
  background-color: #880044;
  font-size: 1.2em;
  color: #f0f0f0;
  border: 1px solid ${V.Color.pinkRedNeon};
  margin-right: 30px;
  outline: none;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background-color: blueviolet;
    box-shadow: 0 0 5px 1px ${V.Color.pinkRedNeon};
  }
  &:active {
    transform: translateY(1px);
  }
  &:last-child {
    margin-right: 0;
  }
`;
