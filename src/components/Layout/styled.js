import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main.attrs({
  role: 'main',
})`
  display: flex;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 55px;
  ${media.greaterThan('medium')`
  padding-top: 100px;
  
  `}
  ${media.greaterThan('large')`
  `}
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Footer = styled.footer`
  position: relative;
  align-self: flex-end;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
`;
