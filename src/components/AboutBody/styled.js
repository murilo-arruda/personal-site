import styled from 'styled-components';
import media from 'styled-media-query';
import * as V from 'styles/variables';
import { Link } from 'gatsby';

export const About = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  a {
    text-decoration: underline;
    font-weight: bold;
    color: white;
    text-decoration-color: ${V.Color.pinkRedNeon};
  }
  h1 {
    text-align: center;
  }
  p {
    font-size: 1.5em;
  }
  ${media.lessThan('614px')`
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
export const Linkto = styled(Link)`
  text-decoration: underline;
  font-weight: bold;
  color: white;
  text-decoration-color: ${V.Color.pinkRedNeon};
`;
