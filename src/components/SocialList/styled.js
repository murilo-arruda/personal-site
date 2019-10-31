import styled from 'styled-components';
import media from 'styled-media-query';
import * as V from 'styles/variables';
export const Social = styled.div`
  display: flex;
  justify-content: space-evenly;

  a:visited {
    color: ${V.Color.pinkRedNeon};
  }
  a {
    margin-right: 1em;
    color: ${V.Color.pinkRedNeon};
    border-radius: 50%;
  }
  a:hover {
    box-shadow: 0 0 15px #bc2a8d;
  }

  ${media.lessThan('614px')`
    visibility: hidden;
    display: none;
    width: 0;
  `}
`;
