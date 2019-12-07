import styled from 'styled-components';
import media from 'styled-media-query';

export const Navbar = styled.ul`
  padding-left: 15px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.3em;
  li {
    list-style: none;
    margin-right: 10px;
    margin-bottom: 0;
  }
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
  ${media.lessThan('medium')`
  font-size: .9em;
  svg {
      visibility: hidden;
      display: none;
    }
    &:last-child {
      margin-right: 0;
    }
  `}
`;
