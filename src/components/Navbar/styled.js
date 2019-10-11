import styled from 'styled-components';
import media from 'styled-media-query';

export const Navbar = styled.ul`
  padding-inline-start: 0;
  li {
    list-style: none;
    text-align: center;
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

  ${media.between('small', 'large')`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
   
    li {
      margin-right: 10px;
     
      &:last-child {
        margin-right: 0;
      }
    }
  `}

  ${media.lessThan('small')`
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    li {
      margin-right: 10px;   
      font-weight: 500;
  
      svg {
        visibility: hidden;
        display: none;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  `}
`;
