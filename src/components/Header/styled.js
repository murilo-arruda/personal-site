import styled from 'styled-components';
import * as V from 'styles/variables';

export const Container = styled.header`
  display: block;
  background-color: black;
  color: #f0f0f0;
  font-size: 1em;
  border-bottom: 3px solid ${V.Color.pinkRedNeon};
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 5;
`;
export const HeaderItems = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
