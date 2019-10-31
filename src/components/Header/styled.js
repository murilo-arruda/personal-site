import styled from 'styled-components';
import media from 'styled-media-query';
import * as V from 'styles/variables';

export const Container = styled.header`
  width: 350px;
  padding: 5px;
  background-color: black;
  border-right: 5px solid ${V.Color.pinkRedNeon};
  color: #f0f0f0;
  text-align: center;
  font-size: 1em;

  ${media.between('614px', 'large')`
    width: 100%;
    border-right: 0;
    border-bottom: 5px solid ${V.Color.pinkRedNeon};
    margin: 10px;
  `}
  ${media.lessThan('614px')`
    border-right: 0;
    border-bottom: 3px solid ${V.Color.pinkRedNeon};
    display: block;
    left: 0px;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100%;
    z-index: 5;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  `}
  ${media.lessThan('334px')`
    font-size: 0.9em;
  `}
`;
