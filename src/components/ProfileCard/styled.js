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
    color: #DB005E;
  }
  a:hover {
    color: #999898;
  }

  h4 {
    margin-top: 0;
  }
  ${media.lessThan('614px')`
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin-left: 10px;
     font-size: 1em;
    }
    h4 {
      visibility: hidden;
      display: none;
    }
  `}

  ${media.between('614px', 'large')`
    h1 {
      margin-bottom: 0.3em;
    }
    h4 {
      font-size: 1em;
      margin-bottom: 0.9em;
    }
  `}
`;

export const Description = styled.p`
  font-size: 1em;
  color: #cdcdcd;
  ${media.lessThan('614px')`
     visibility: hidden;
     display: none;
`}
  ${media.between('614px', 'large')`
  font-size: .9em;
`}
`;

export const Pic = styled(Img)`
  width: 100%;
  border-radius: 50%;
  margin: 0 auto;
  ${media.lessThan('614px')`
    width: 2.5rem;
    height: 2.5rem;
  `}
  ${media.between('614px', 'large')`
  max-width: 150px;
  `}
`;