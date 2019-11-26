import React, { useContext, useEffect } from 'react';
import SkillsContext from 'context/skills/skillsContext';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const SvgCustomize = styled.div`
  svg {
    width: 100px;
    height: 100px;
    fill-opacity: ${props => (props.shouldHighlight ? 1 : 0.1)};
  }
`;
const StackList = () => {
  const { skills } = useContext(SkillsContext);
  useEffect(() => {}, [skills]);
  return (
    <Wrapper>
      {Object.keys(skills).map(key =>
        !skills[key].special && skills[key].icon ? (
          <SvgCustomize shouldHighlight={skills[key].isActive} key={key}>
            {skills[key].icon}
          </SvgCustomize>
        ) : null
      )}
    </Wrapper>
  );
};

export default StackList;
