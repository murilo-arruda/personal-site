import styled from 'styled-components';
export const Wrapper = styled.div`
  svg {
    fill-opacity: ${props => (props.highlight ? 0.05 : 1)};
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const SvgCustomize = styled.div`
  svg {
    width: 100px;
    height: 100px;
    fill-opacity: ${props => (props.shouldHighlight ? 1 : '')};
  }
`;
