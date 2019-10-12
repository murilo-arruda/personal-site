import styled from 'styled-components';
import media from 'styled-media-query';

import Img from 'gatsby-image';
export const Profile = styled.div`
  text-align: center;
  a {
    color: #f0f0f0;
    text-decoration: none;
  }
  a:visited {
    color: #f0f0f0;
  }
  a:hover {
    color: #999898;
  }

  ${media.lessThan('small')`
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin-left: 10px;
      font-size: 1.2em;
     
      font-weight: 500;
    }
    h3 {
      visibility: hidden;
      display: none;
    }
  `}

  ${media.between('small', 'large')`
    h1 {
      margin-bottom: 0.3em;
    }
    h3 {
      font-size: 1em;
      margin-bottom: 0.9em;
    }
  `}
`;

export const Description = styled.p`
  font-size: 1em;
  color: #cdcdcd;
  ${media.lessThan('small')`
     visibility: hidden;
     display: none;
`}
  ${media.between('small', 'large')`
  font-size: .9em;
`}
`;

export const Pic = styled(Img)`
  border-radius: 50%;

  margin: 0 auto;
  ${media.lessThan('small')`
    width: 2.5rem;
    height: 2.5rem;
  `}
  ${media.between('small', 'large')`
  max-width: 150px;
  `}
`;
