import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const SvgCustomize = styled.div`
  svg {
    width: 100px;
    height: 100px;
    fill-opacity: ${props => (props.shouldHighlight ? 1 : 0.1)};
  }
  ${media.lessThan('large')`
    svg {
      fill-opacity: 1;
    }
 `}
`;
