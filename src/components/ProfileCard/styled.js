import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const Profile = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 1.6em;
  }
  a {
    margin-left: 20px;
    color: #f0f0f0;
    text-decoration: none;
  }
  a:visited {
    color: #db005e;
  }
  a:hover {
    color: #999898;
  }
  ${media.lessThan('medium')`
    h1 {
      font-size: .9em;
    }
    a {
    margin-left: 5px;
  `}
`;

export const Pic = styled(Img)`
  border-radius: 50%;
  margin: 0;
  width: 2.5rem;
  height: 2.5rem;
`;
