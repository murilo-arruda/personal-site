import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main.attrs({
  role: 'main',
})`
  display: flex;
  min-height: 100vh;
  margin-bottom: 0;
  ${media.lessThan('614px')`
  margin-top: 4.8rem;
  `}
  ${media.lessThan('large')`
  flex-direction: column;
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
