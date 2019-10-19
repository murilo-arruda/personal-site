import styled from 'styled-components';
import media from 'styled-media-query';
import * as V from 'styles/variables';

export const About = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  h1 {
    text-align: center;
  }
  p {
    font-size: 1.5em;
  }
  ${media.lessThan('small')`
  padding-left: 10px;
  padding-right: 10px;
    p {
      font-size: 1em;
    }
    h1 {
      font-size: 1.5em;
   
    }
  `}
  ${media.lessThan('medium')`
  padding-left: 5%;
  padding-right: 5%;
  p {
    font-size: 1.2em;
  }
  `}
  ${media.lessThan('334px')`
    p{
      font-size: 1em;
    }
    `}
`;
export const Line = styled.strong`
  text-decoration: underline;
  text-decoration-color: ${V.Color.pinkRedNeon};
`;
